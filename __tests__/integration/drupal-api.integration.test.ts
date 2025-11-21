import { describe, it, expect } from 'vitest';

/**
 * Integration Tests: Real Drupal API
 * These tests make actual HTTP requests to the Drupal backend
 * Run with: npm run test:integration
 */

const DRUPAL_BASE_URL = 'https://cms.asociacionpetis.org';
const KNOWN_ARTICLE_UUID = 'bc056031-76a9-4cae-a174-11f4265c65e8';

/**
 * Sanitize malformed JSON from Drupal server
 * Server is returning '<{' instead of '{' - strip the leading '<'
 */
async function parseJsonResponse(response: Response): Promise<any> {
  const rawText = await response.text();
  const cleanedText = rawText.startsWith('<{') ? rawText.substring(1) : rawText;
  return JSON.parse(cleanedText);
}

describe('integration: Drupal JSON:API Endpoints', () => {
  it('should fetch article list from real API', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article?include=field_image,field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);

    const data = await parseJsonResponse(response);

    // Validate JSON:API structure
    expect(data).toHaveProperty('jsonapi');
    expect(data).toHaveProperty('data');
    expect(data).toHaveProperty('links');

    expect(data.jsonapi).toHaveProperty('version');
    expect(Array.isArray(data.data)).toBe(true);
  });

  it('should fetch specific article by UUID from real API', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_image,field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);

    const data = await parseJsonResponse(response);

    // Validate response structure
    expect(data).toHaveProperty('data');
    expect(data.data).toHaveProperty('type', 'node--article');
    expect(data.data).toHaveProperty('id', KNOWN_ARTICLE_UUID);
    expect(data.data).toHaveProperty('attributes');
    expect(data.data).toHaveProperty('relationships');
  });

  it('should validate article attributes structure', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_image,field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    const data = await parseJsonResponse(response);
    const attributes = data.data.attributes;

    // Required fields
    expect(attributes).toHaveProperty('title');
    expect(attributes).toHaveProperty('created');
    expect(attributes).toHaveProperty('changed');
    expect(attributes).toHaveProperty('status');
    expect(attributes).toHaveProperty('body');
    expect(attributes).toHaveProperty('path');

    // Title should be non-empty
    expect(typeof attributes.title).toBe('string');
    expect(attributes.title.length).toBeGreaterThan(0);

    // Dates should be ISO format
    expect(attributes.created).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    expect(attributes.changed).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);

    // Status should be boolean
    expect(typeof attributes.status).toBe('boolean');

    // Body should have expected structure
    expect(attributes.body).toHaveProperty('value');
    expect(attributes.body).toHaveProperty('processed');

    // Path should have alias
    expect(attributes.path).toHaveProperty('alias');
  });

  it('should validate relationships structure', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_image,field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    const data = await parseJsonResponse(response);
    const relationships = data.data.relationships;

    // Check expected relationships exist
    expect(relationships).toHaveProperty('field_image');
    expect(relationships).toHaveProperty('field_tags');
    expect(relationships).toHaveProperty('uid');
    expect(relationships).toHaveProperty('node_type');

    // Each relationship should have links
    expect(relationships.field_image).toHaveProperty('links');
    expect(relationships.field_tags).toHaveProperty('links');
  });

  it('should include related resources when requested', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_image,field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    const data = await parseJsonResponse(response);

    // If relationships have data, included should be present
    const hasImageData = data.data.relationships.field_image.data !== null;
    const hasTagsData = data.data.relationships.field_tags.data?.length > 0;

    if (hasImageData || hasTagsData) {
      expect(data).toHaveProperty('included');
      expect(Array.isArray(data.included)).toBe(true);
    }
  });

  it('should return 404 for non-existent UUID', async () => {
    const fakeUuid = '00000000-0000-0000-0000-000000000000';

    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${fakeUuid}`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    expect(response.ok).toBe(false);
    expect(response.status).toBe(404);
  });

  it('should support pagination parameters', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article?page[limit]=5&page[offset]=0`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    expect(response.ok).toBe(true);

    const data = await parseJsonResponse(response);

    // Should respect limit (or return fewer if less articles exist)
    expect(data.data.length).toBeLessThanOrEqual(5);
  });

  it('should support filtering by status', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article?filter[status]=1`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    expect(response.ok).toBe(true);

    const data = await parseJsonResponse(response);

    // All returned articles should be published
    data.data.forEach((article: any) => {
      expect(article.attributes.status).toBe(true);
    });
  });
});

describe('integration: Image URL Construction', () => {
  it('should construct valid image URLs from file URIs', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_image`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    const data = await parseJsonResponse(response);

    // If article has image
    if (data.data.relationships.field_image.data && data.included) {
      const imageFile = data.included.find(
        (item: any) => item.type === 'file--file'
      );

      if (imageFile) {
        expect(imageFile.attributes).toHaveProperty('uri');
        expect(imageFile.attributes.uri).toHaveProperty('url');

        const imageUrl = `${DRUPAL_BASE_URL}${imageFile.attributes.uri.url}`;

        // Validate URL structure (CORS prevents fetch in test environment)
        expect(imageUrl).toMatch(/^https:\/\/cms\.asociacionpetis\.org\//);
        expect(imageUrl).toMatch(/\.(jpg|jpeg|png|gif|webp)$/i);
      }
    }
  });
});

describe('integration: Tag Extraction', () => {
  it('should extract taxonomy terms from included resources', async () => {
    const response = await fetch(
      `${DRUPAL_BASE_URL}/jsonapi/node/article/${KNOWN_ARTICLE_UUID}?include=field_tags`,
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      }
    );

    const data = await parseJsonResponse(response);

    // If article has tags
    if (data.data.relationships.field_tags.data?.length > 0 && data.included) {
      const tags = data.included.filter(
        (item: any) => item.type === 'taxonomy_term--tags'
      );

      expect(tags.length).toBeGreaterThan(0);

      tags.forEach((tag: any) => {
        expect(tag.attributes).toHaveProperty('name');
        expect(typeof tag.attributes.name).toBe('string');
        expect(tag.attributes.name.length).toBeGreaterThan(0);
      });
    }
  });
});
