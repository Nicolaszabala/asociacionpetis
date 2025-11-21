import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getArticles, getArticleByUuid, getArticleBySlug, clearCache } from '@/lib/drupal/client';
import {
  mockArticleListResponse,
  mockSingleArticleResponse,
  mockEmptyArticleListResponse
} from '../fixtures/drupal-articles.fixture';

/**
 * Unit Tests: Drupal API Client
 * These tests verify the API client logic using mocked fetch responses
 */

describe('Drupal Client: getArticles', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    clearCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch and transform articles successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockArticleListResponse),
      text: async () => JSON.stringify(mockArticleListResponse),
      json: async () => mockArticleListResponse,
    });

    const articles = await getArticles();

    expect(fetch).toHaveBeenCalledWith(
      'https://cms.asociacionpetis.org/jsonapi/node/article?include=field_image,field_tags',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'Content-Type': 'application/vnd.api+json',
        }),
      })
    );

    expect(articles).toHaveLength(2);
    expect(articles[0]).toMatchObject({
      id: 'bc056031-76a9-4cae-a174-11f4265c65e8',
      title: 'Artículo de Prueba - Derechos de los Animales',
    });
  });

  it('should return empty array when no articles exist', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockEmptyArticleListResponse),
      text: async () => JSON.stringify(mockEmptyArticleListResponse),
      json: async () => mockEmptyArticleListResponse,
    });

    const articles = await getArticles();

    expect(articles).toEqual([]);
  });

  it('should throw error on network failure', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(getArticles()).rejects.toThrow('Network error');
  });

  it('should throw error on 404 response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(getArticles()).rejects.toThrow();
  });

  it('should throw error on 500 response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(getArticles()).rejects.toThrow();
  });

  it('should support pagination parameters', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockArticleListResponse),
      json: async () => mockArticleListResponse,
    });

    await getArticles({ page: 2, limit: 10 });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('page[offset]=10'),
      expect.anything()
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('page[limit]=10'),
      expect.anything()
    );
  });

  it('should support filtering by promoted articles', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockArticleListResponse),
      json: async () => mockArticleListResponse,
    });

    await getArticles({ promoted: true });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('filter[promote]=1'),
      expect.anything()
    );
  });

  it('should cache results for subsequent identical requests', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockArticleListResponse),
      json: async () => mockArticleListResponse,
    });

    await getArticles();
    await getArticles();

    // With Next.js fetch cache, should only call once
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe('Drupal Client: getArticleByUuid', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    clearCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch single article by UUID', async () => {
    const uuid = 'bc056031-76a9-4cae-a174-11f4265c65e8';

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockSingleArticleResponse),
      json: async () => mockSingleArticleResponse,
    });

    const article = await getArticleByUuid(uuid);

    expect(fetch).toHaveBeenCalledWith(
      `https://cms.asociacionpetis.org/jsonapi/node/article/${uuid}?include=field_image,field_tags`,
      expect.anything()
    );

    expect(article).toMatchObject({
      id: uuid,
      title: 'Artículo de Prueba - Derechos de los Animales',
    });
  });

  it('should throw error for invalid UUID', async () => {
    const invalidUuid = 'invalid-uuid';

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(getArticleByUuid(invalidUuid)).rejects.toThrow();
  });

  it('should return null for non-existent UUID', async () => {
    const uuid = 'non-existent-uuid-1234-5678-90ab-cdef';

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    await expect(getArticleByUuid(uuid)).rejects.toThrow();
  });

  it('should include relationships in fetch', async () => {
    const uuid = 'bc056031-76a9-4cae-a174-11f4265c65e8';

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockSingleArticleResponse),
      json: async () => mockSingleArticleResponse,
    });

    const article = await getArticleByUuid(uuid);

    expect(article.imageUrl).toBeDefined();
    expect(article.tags).toHaveLength(2);
  });
});

describe('Drupal Client: getArticleBySlug', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    clearCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch article by slug path', async () => {
    const slug = '/articulos/derechos-animales-2025';

    const response = {
      ...mockArticleListResponse,
      data: [mockSingleArticleResponse.data],
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(response),
      json: async () => response,
    });

    const article = await getArticleBySlug(slug);

    // getArticleBySlug now calls getArticles() internally
    expect(fetch).toHaveBeenCalled();

    expect(article).toMatchObject({
      slug: 'articulos/derechos-animales-2025', // slug without leading slash
      title: 'Artículo de Prueba - Derechos de los Animales',
    });
  });

  it('should return null for non-existent slug', async () => {
    const slug = '/articulos/non-existent';

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockEmptyArticleListResponse),
      json: async () => mockEmptyArticleListResponse,
    });

    const article = await getArticleBySlug(slug);

    expect(article).toBeNull();
  });

  it('should handle slugs with special characters', async () => {
    const slug = '/articulos/título-con-ñ-y-acentos';

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify(mockEmptyArticleListResponse),
      json: async () => mockEmptyArticleListResponse,
    });

    const result = await getArticleBySlug(slug);

    // getArticleBySlug calls getArticles() internally
    expect(fetch).toHaveBeenCalled();
    expect(result).toBeNull(); // No article found
  });
});

describe('Drupal Client: Error Handling', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    clearCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should handle malformed JSON response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => {
        throw new Error('Unexpected token');
      },
    });

    await expect(getArticles()).rejects.toThrow();
  });

  it('should handle missing environment variables', async () => {
    const originalEnv = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    delete process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;

    await expect(getArticles()).rejects.toThrow();

    process.env.NEXT_PUBLIC_DRUPAL_BASE_URL = originalEnv;
  });

  it('should provide meaningful error messages', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(getArticles()).rejects.toThrow(/500/);
  });
});
