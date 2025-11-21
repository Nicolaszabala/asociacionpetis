import { describe, it, expect } from 'vitest';

/**
 * Unit Tests: Environment Variables & Configuration
 * These tests verify that required environment variables are properly configured
 */

describe('Environment Configuration', () => {
  it('should have NEXT_PUBLIC_DRUPAL_BASE_URL defined', () => {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    expect(baseUrl).toBeDefined();
    expect(baseUrl).toBe('https://cms.asociacionpetis.org');
  });

  it('should have valid JSONAPI endpoint URL', () => {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    const jsonApiUrl = `${baseUrl}/jsonapi`;

    expect(jsonApiUrl).toBe('https://cms.asociacionpetis.org/jsonapi');
  });

  it('should construct articles endpoint correctly', () => {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    const articlesEndpoint = `${baseUrl}/jsonapi/node/article`;

    expect(articlesEndpoint).toBe('https://cms.asociacionpetis.org/jsonapi/node/article');
  });
});
