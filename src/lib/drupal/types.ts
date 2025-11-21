/**
 * TypeScript type definitions for Drupal JSON:API responses
 * Based on cms.asociacionpetis.org API structure
 */

export interface DrupalJsonApiResponse<T = any> {
  jsonapi: {
    version: string;
    meta: {
      links: {
        self: {
          href: string;
        };
      };
    };
  };
  data: T;
  included?: DrupalResource[];
  links: {
    self: {
      href: string;
    };
    next?: {
      href: string;
    };
    prev?: {
      href: string;
    };
  };
}

export interface DrupalResource {
  type: string;
  id: string;
  attributes: Record<string, any>;
  relationships?: Record<string, DrupalRelationship>;
  links?: {
    self: {
      href: string;
    };
  };
}

export interface DrupalRelationship {
  data: DrupalResourceIdentifier | DrupalResourceIdentifier[] | null;
  links?: {
    related?: {
      href: string;
    };
    self?: {
      href: string;
    };
  };
}

export interface DrupalResourceIdentifier {
  type: string;
  id: string;
  meta?: Record<string, any>;
}

export interface DrupalArticle extends DrupalResource {
  type: 'node--article';
  attributes: {
    drupal_internal__nid: number;
    drupal_internal__vid: number;
    langcode: string;
    revision_timestamp: string;
    status: boolean;
    title: string;
    created: string;
    changed: string;
    promote: boolean;
    sticky: boolean;
    default_langcode: boolean;
    revision_translation_affected: boolean;
    path: {
      alias: string;
      pid: number;
      langcode: string;
    };
    body: {
      value: string;
      format: string;
      processed: string;
      summary: string | null;
    };
  };
  relationships: {
    node_type: DrupalRelationship;
    field_image: DrupalRelationship;
    field_tags: DrupalRelationship;
    uid: DrupalRelationship;
  };
}

export interface DrupalFile extends DrupalResource {
  type: 'file--file';
  attributes: {
    drupal_internal__fid: number;
    langcode: string;
    filename: string;
    uri: {
      value: string;
      url: string;
    };
    filemime: string;
    filesize: number;
    status: boolean;
    created: string;
    changed: string;
  };
}

export interface DrupalTaxonomyTerm extends DrupalResource {
  type: 'taxonomy_term--tags';
  attributes: {
    drupal_internal__tid: number;
    langcode: string;
    name: string;
    description: {
      value: string;
      format: string | null;
      processed: string;
    };
    weight: number;
    changed: string;
    default_langcode: boolean;
  };
}

/**
 * Transformed article for Next.js app consumption
 */
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  imageAlt?: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

/**
 * Options for fetching articles
 */
export interface GetArticlesOptions {
  page?: number;
  limit?: number;
  promoted?: boolean;
  tag?: string;
}
