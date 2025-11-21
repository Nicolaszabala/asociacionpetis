/**
 * Drupal JSON:API Helper Functions - STUB (TDD Phase: Red)
 * Implementation pending - tests will fail
 */

import type { DrupalArticle, DrupalResource, Article } from './types';

/**
 * Convert a string to URL-friendly slug
 */
function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove non-word chars except -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
}

export function getImageUrl(
  article: DrupalArticle,
  included: DrupalResource[],
  baseUrl?: string
): string | null {
  // Check if article has image relationship
  const imageRelationship = article.relationships?.field_image;

  if (!imageRelationship?.data || imageRelationship.data === null) {
    return null;
  }

  // Get the image resource identifier
  const imageData = imageRelationship.data as { type: string; id: string };

  // Find the file resource in included
  const fileResource = extractIncludedResource(included, 'file--file', imageData.id);

  if (!fileResource) {
    return null;
  }

  // Extract the URL from the file resource
  const imageUrl = fileResource.attributes.uri?.url;

  if (!imageUrl) {
    return null;
  }

  // Return full URL if baseUrl is provided, otherwise relative URL
  return baseUrl ? `${baseUrl}${imageUrl}` : imageUrl;
}

export function getTags(
  article: DrupalArticle,
  included: DrupalResource[]
): string[] {
  // Check if article has tags relationship
  const tagsRelationship = article.relationships?.field_tags;

  if (!tagsRelationship?.data || !Array.isArray(tagsRelationship.data) || tagsRelationship.data.length === 0) {
    return [];
  }

  // Extract tag names from included resources
  const tagNames: string[] = [];

  for (const tagRef of tagsRelationship.data) {
    const tagResource = extractIncludedResource(included, 'taxonomy_term--tags', tagRef.id);

    if (tagResource?.attributes?.name) {
      tagNames.push(tagResource.attributes.name);
    }
  }

  return tagNames;
}

export function transformDrupalArticle(
  drupalArticle: DrupalArticle,
  included: DrupalResource[]
): Article {
  // Generate slug from path alias or fallback to slugified title
  const pathAlias = drupalArticle.attributes.path?.alias;
  const slug = pathAlias
    ? pathAlias.replace(/^\//, '')
    : slugify(drupalArticle.attributes.title);

  // Get base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || 'https://cms.asociacionpetis.org';

  return {
    id: drupalArticle.id,
    title: drupalArticle.attributes.title,
    slug: slug,
    excerpt: drupalArticle.attributes.body.summary || '',
    content: drupalArticle.attributes.body.processed,
    imageUrl: getImageUrl(drupalArticle, included, baseUrl),
    tags: getTags(drupalArticle, included),
    publishedAt: drupalArticle.attributes.created,
    updatedAt: drupalArticle.attributes.changed,
  };
}

export function extractIncludedResource(
  included: DrupalResource[],
  type: string,
  id: string
): DrupalResource | undefined {
  return included.find(resource => resource.type === type && resource.id === id);
}
