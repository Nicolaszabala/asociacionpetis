import type { Article } from "@/lib/drupal/types";
import type { InstagramApiResponse, InstagramPost } from "./types";

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_API_VERSION = "v19.0";
const INSTAGRAM_REVALIDATE_SECONDS = 3600;

export function isInstagramConfigured(): boolean {
  return Boolean(INSTAGRAM_USER_ID && INSTAGRAM_ACCESS_TOKEN);
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function normalizeCaption(caption?: string): string {
  return (caption || "").replace(/\r/g, "").trim();
}

function extractTitle(caption?: string): string {
  const normalizedCaption = normalizeCaption(caption);

  if (!normalizedCaption) {
    return "Publicación de Instagram";
  }

  const firstLine = normalizedCaption
    .split("\n")
    .map((line) => line.trim())
    .find(Boolean);

  if (!firstLine) {
    return "Publicación de Instagram";
  }

  const cleanedTitle = firstLine
    .replace(/#[^\s#.,!?;:]+/g, "")
    .replace(/@[^\s#.,!?;:]+/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return truncate(cleanedTitle || firstLine, 80);
}

function extractExcerpt(caption?: string): string {
  const normalizedCaption = normalizeCaption(caption).replace(/\s+/g, " ");

  if (!normalizedCaption) {
    return "Consulta esta publicación no perfil de Instagram da asociación.";
  }

  return truncate(normalizedCaption, 180);
}

function extractTags(caption?: string): string[] {
  const matches = normalizeCaption(caption).match(/#[^\s#.,!?;:]+/g) || [];

  return [...new Set(matches.map((tag) => tag.replace(/^#/, "").toLowerCase()))];
}

function buildContentHtml(caption?: string, permalink?: string): string {
  const normalizedCaption = normalizeCaption(caption);

  if (!normalizedCaption) {
    const safePermalink = permalink ? escapeHtml(permalink) : "";
    return safePermalink
      ? `<p>Consulta a publicación completa en <a href="${safePermalink}" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>`
      : "<p>Consulta a publicación completa en Instagram.</p>";
  }

  return normalizedCaption
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`)
    .join("");
}

function buildSlug(post: InstagramPost, title: string): string {
  const datePart = post.timestamp.slice(0, 10);
  const titlePart = slugify(title) || "instagram";
  const idSuffix = post.id.slice(-6).toLowerCase();

  return `${datePart}-${titlePart}-${idSuffix}`;
}

function sortByPublishedDate(posts: InstagramPost[]): InstagramPost[] {
  return [...posts].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
}

function getCoverImage(post: InstagramPost): string {
  if (post.media_type === "VIDEO" && post.thumbnail_url) {
    return post.thumbnail_url;
  }

  return post.media_url;
}

export function transformInstagramPostToArticle(post: InstagramPost): Article {
  const title = extractTitle(post.caption);

  return {
    id: post.id,
    title,
    slug: buildSlug(post, title),
    excerpt: extractExcerpt(post.caption),
    content: buildContentHtml(post.caption, post.permalink),
    imageUrl: getCoverImage(post),
    imageAlt: title,
    tags: extractTags(post.caption),
    publishedAt: post.timestamp,
    updatedAt: post.timestamp,
    externalUrl: post.permalink,
    source: "instagram",
  };
}

async function fetchInstagramPosts(limit = 9): Promise<InstagramPost[]> {
  if (!isInstagramConfigured()) {
    return [];
  }

  const url =
    `https://graph.facebook.com/${INSTAGRAM_API_VERSION}/${INSTAGRAM_USER_ID}/media` +
    `?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp` +
    `&limit=${limit}` +
    `&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: INSTAGRAM_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Instagram API responded with ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as InstagramApiResponse;
    return sortByPublishedDate(data.data || []);
  } catch (error) {
    console.error("Failed to fetch Instagram posts for blog:", error);
    return [];
  }
}

export async function getInstagramArticles(limit = 9): Promise<Article[]> {
  const posts = await fetchInstagramPosts(limit);
  return posts.map(transformInstagramPostToArticle);
}

export async function getInstagramArticleBySlug(
  slug: string,
  limit = 24
): Promise<Article | null> {
  const articles = await getInstagramArticles(limit);
  return articles.find((article) => article.slug === slug) || null;
}
