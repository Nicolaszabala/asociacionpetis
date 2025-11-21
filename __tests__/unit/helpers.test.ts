import { describe, it, expect } from 'vitest';
import {
  getImageUrl,
  getTags,
  transformDrupalArticle,
  extractIncludedResource
} from '@/lib/drupal/helpers';
import {
  mockSingleArticleResponse,
  mockArticleListResponse
} from '../fixtures/drupal-articles.fixture';

/**
 * Unit Tests: Helper Functions
 * These test the pure transformation logic without API calls
 */

describe('Helper: getImageUrl', () => {
  it('should extract image URL from included resources', () => {
    const article = mockSingleArticleResponse.data;
    const included = mockSingleArticleResponse.included;

    const imageUrl = getImageUrl(article, included);

    expect(imageUrl).toBeDefined();
    expect(imageUrl).toContain('/sites/default/files/2025-01/test-image.jpg');
  });

  it('should return null when image relationship is null', () => {
    const articleNoImage = mockArticleListResponse.data[1];
    const included = mockArticleListResponse.included;

    const imageUrl = getImageUrl(articleNoImage, included);

    expect(imageUrl).toBeNull();
  });

  it('should handle missing included resources gracefully', () => {
    const article = mockSingleArticleResponse.data;

    const imageUrl = getImageUrl(article, []);

    expect(imageUrl).toBeNull();
  });

  it('should construct full absolute URL with base domain', () => {
    const article = mockSingleArticleResponse.data;
    const included = mockSingleArticleResponse.included;
    const baseUrl = 'https://cms.asociacionpetis.org';

    const imageUrl = getImageUrl(article, included, baseUrl);

    expect(imageUrl).toBe('https://cms.asociacionpetis.org/sites/default/files/2025-01/test-image.jpg');
  });
});

describe('Helper: getTags', () => {
  it('should extract tag names from included resources', () => {
    const article = mockSingleArticleResponse.data;
    const included = mockSingleArticleResponse.included;

    const tags = getTags(article, included);

    expect(tags).toHaveLength(2);
    expect(tags).toContain('Derechos Animales');
    expect(tags).toContain('Activismo');
  });

  it('should return empty array when no tags exist', () => {
    const articleNoTags = mockArticleListResponse.data[1];
    const included = mockArticleListResponse.included;

    const tags = getTags(articleNoTags, included);

    expect(tags).toEqual([]);
  });

  it('should handle missing included resources', () => {
    const article = mockSingleArticleResponse.data;

    const tags = getTags(article, []);

    expect(tags).toEqual([]);
  });
});

describe('Helper: extractIncludedResource', () => {
  it('should find resource by type and id', () => {
    const included = mockSingleArticleResponse.included;
    const fileId = 'f1e2d3c4-b5a6-7890-1234-567890abcdef';

    const resource = extractIncludedResource(included, 'file--file', fileId);

    expect(resource).toBeDefined();
    expect(resource?.id).toBe(fileId);
    expect(resource?.attributes.filename).toBe('test-image.jpg');
  });

  it('should return undefined for non-existent resource', () => {
    const included = mockSingleArticleResponse.included;

    const resource = extractIncludedResource(included, 'file--file', 'non-existent-id');

    expect(resource).toBeUndefined();
  });

  it('should return undefined for wrong type', () => {
    const included = mockSingleArticleResponse.included;
    const fileId = 'f1e2d3c4-b5a6-7890-1234-567890abcdef';

    const resource = extractIncludedResource(included, 'taxonomy_term--tags', fileId);

    expect(resource).toBeUndefined();
  });
});

describe('Helper: transformDrupalArticle', () => {
  it('should transform Drupal article to app format', () => {
    const drupalArticle = mockSingleArticleResponse.data;
    const included = mockSingleArticleResponse.included;

    const transformed = transformDrupalArticle(drupalArticle, included);

    expect(transformed).toMatchObject({
      id: 'bc056031-76a9-4cae-a174-11f4265c65e8',
      title: 'Artículo de Prueba - Derechos de los Animales',
      slug: 'articulos/derechos-animales-2025',
      excerpt: 'Resumen del artículo sobre derechos animales',
      content: '<p>Este es un artículo de prueba sobre los derechos de los animales en 2025.</p>',
      publishedAt: '2025-01-15T10:00:00+00:00',
      updatedAt: '2025-01-15T10:30:00+00:00',
    });

    expect(transformed.imageUrl).toBeDefined();
    expect(transformed.tags).toEqual(['Derechos Animales', 'Activismo']);
  });

  it('should handle articles without images', () => {
    const drupalArticle = mockArticleListResponse.data[1];
    const included = mockArticleListResponse.included;

    const transformed = transformDrupalArticle(drupalArticle, included);

    expect(transformed.imageUrl).toBeNull();
  });

  it('should handle articles without tags', () => {
    const drupalArticle = mockArticleListResponse.data[1];
    const included = mockArticleListResponse.included;

    const transformed = transformDrupalArticle(drupalArticle, included);

    expect(transformed.tags).toEqual([]);
  });

  it('should use body.processed over body.value', () => {
    const drupalArticle = mockSingleArticleResponse.data;
    const included = mockSingleArticleResponse.included;

    const transformed = transformDrupalArticle(drupalArticle, included);

    expect(transformed.content).toBe(drupalArticle.attributes.body.processed);
  });

  it('should fallback to empty string for missing summary', () => {
    const drupalArticle = {
      ...mockSingleArticleResponse.data,
      attributes: {
        ...mockSingleArticleResponse.data.attributes,
        body: {
          ...mockSingleArticleResponse.data.attributes.body,
          summary: null
        }
      }
    };
    const included = mockSingleArticleResponse.included;

    const transformed = transformDrupalArticle(drupalArticle, included);

    expect(transformed.excerpt).toBe('');
  });
});
