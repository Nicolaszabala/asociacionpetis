import type { Article } from "@/lib/drupal/types";
import { getArticleBySlug as getDrupalArticleBySlug, getArticles as getDrupalArticles } from "@/lib/drupal/client";
import {
  getInstagramArticleBySlug,
  getInstagramArticles,
  isInstagramConfigured,
} from "@/lib/instagram/client";

const BLOG_LIST_LIMIT = 9;
const BLOG_DETAIL_LOOKUP_LIMIT = 24;

export async function getBlogArticles(): Promise<Article[]> {
  if (isInstagramConfigured()) {
    const instagramArticles = await getInstagramArticles(BLOG_LIST_LIMIT);

    if (instagramArticles.length > 0) {
      return instagramArticles;
    }
  }

  return getDrupalArticles();
}

export async function getBlogArticleBySlug(slug: string): Promise<Article | null> {
  if (isInstagramConfigured()) {
    const instagramArticle = await getInstagramArticleBySlug(slug, BLOG_DETAIL_LOOKUP_LIMIT);

    if (instagramArticle) {
      return instagramArticle;
    }
  }

  return getDrupalArticleBySlug(slug);
}

export async function getBlogStaticParams(): Promise<Array<{ slug: string }>> {
  const articles = await getBlogArticles();
  return articles.map((article) => ({ slug: article.slug }));
}
