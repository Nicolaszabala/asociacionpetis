/**
 * Drupal API Client - Implementation (TDD Phase: Green)
 */

import type { Article, GetArticlesOptions, DrupalJsonApiResponse, DrupalArticle } from './types';
import { transformDrupalArticle } from './helpers';

const DRUPAL_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;

// Simple in-memory cache for testing (Next.js handles caching in production)
const cache = new Map<string, any>();

// Export cache clear function for testing
export function clearCache() {
  cache.clear();
}

/**
 * Sanitize malformed JSON from Drupal server
 * Server is returning '<{' instead of '{' - strip the leading '<'
 */
async function parseJsonResponse<T>(response: Response): Promise<T> {
  const rawText = await response.text();
  const cleanedText = rawText.startsWith('<{') ? rawText.substring(1) : rawText;
  return JSON.parse(cleanedText);
}

export async function getArticles(options?: GetArticlesOptions): Promise<Article[]> {
  // Validate environment variable
  if (!DRUPAL_BASE_URL) {
    throw new Error('NEXT_PUBLIC_DRUPAL_BASE_URL is not defined');
  }

  // Build URL with query parameters manually to avoid URL encoding issues in tests
  // Sort by created date descending (newest first)
  let url = `${DRUPAL_BASE_URL}/jsonapi/node/article?include=field_image,field_tags&sort=-created`;

  // Handle pagination
  if (options?.page && options?.limit) {
    const offset = (options.page - 1) * options.limit;
    url += `&page[offset]=${offset}`;
    url += `&page[limit]=${options.limit}`;
  }

  // Handle filtering
  if (options?.promoted) {
    url += '&filter[promote]=1';
  }

  // Check cache first
  if (cache.has(url)) {
    return cache.get(url);
  }

  // Make request
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
    next: { revalidate: 60 }, // Cache for 60 seconds (Next.js specific)
  });

  // Handle errors
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
  }

  // Parse response (with sanitization for malformed JSON)
  const data: DrupalJsonApiResponse<DrupalArticle[]> = await parseJsonResponse(response);

  // Transform and return
  const articles = data.data.map(article => transformDrupalArticle(article, data.included || []));

  // Store in cache
  cache.set(url, articles);

  return articles;
}

export async function getArticleByUuid(uuid: string): Promise<Article> {
  // Validate environment variable
  if (!DRUPAL_BASE_URL) {
    throw new Error('NEXT_PUBLIC_DRUPAL_BASE_URL is not defined');
  }

  // Build URL
  const url = `${DRUPAL_BASE_URL}/jsonapi/node/article/${uuid}?include=field_image,field_tags`;

  // Make request
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
    next: { revalidate: 60 },
  });

  // Handle errors
  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
  }

  // Parse response (with sanitization for malformed JSON)
  const data: DrupalJsonApiResponse<DrupalArticle> = await parseJsonResponse(response);

  // Transform and return
  return transformDrupalArticle(data.data, data.included || []);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Validate environment variable
  if (!DRUPAL_BASE_URL) {
    throw new Error('NEXT_PUBLIC_DRUPAL_BASE_URL is not defined');
  }

  // Normalize slug: remove leading slash if present
  const normalizedSlug = slug.startsWith('/') ? slug.substring(1) : slug;

  // Get all articles and find by slug (filtering by path.alias causes 500 error in Drupal)
  const articles = await getArticles();

  // Find article with matching slug
  const article = articles.find(a => a.slug === normalizedSlug);

  return article || null;
}
