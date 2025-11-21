/**
 * Mock fixtures for Drupal JSON:API responses
 * Based on actual structure from cms.asociacionpetis.org
 */

export const mockArticleListResponse = {
  jsonapi: {
    version: "1.0",
    meta: {
      links: {
        self: {
          href: "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  data: [
    {
      type: "node--article",
      id: "bc056031-76a9-4cae-a174-11f4265c65e8",
      attributes: {
        drupal_internal__nid: 1,
        drupal_internal__vid: 1,
        langcode: "es",
        revision_timestamp: "2025-01-15T10:30:00+00:00",
        status: true,
        title: "Artículo de Prueba - Derechos de los Animales",
        created: "2025-01-15T10:00:00+00:00",
        changed: "2025-01-15T10:30:00+00:00",
        promote: true,
        sticky: false,
        default_langcode: true,
        revision_translation_affected: true,
        path: {
          alias: "/articulos/derechos-animales-2025",
          pid: 1,
          langcode: "es"
        },
        body: {
          value: "<p>Este es un artículo de prueba sobre los derechos de los animales en 2025.</p>",
          format: "basic_html",
          processed: "<p>Este es un artículo de prueba sobre los derechos de los animales en 2025.</p>",
          summary: "Resumen del artículo sobre derechos animales"
        }
      },
      relationships: {
        node_type: {
          data: {
            type: "node_type--node_type",
            id: "d0d5d3f4-8e3a-4b4a-9c5e-1234567890ab"
          },
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/node_type"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/node_type"
            }
          }
        },
        field_image: {
          data: {
            type: "file--file",
            id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
            meta: {
              alt: "Imagen de prueba sobre derechos animales",
              title: "",
              width: 1200,
              height: 800
            }
          },
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/field_image"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/field_image"
            }
          }
        },
        field_tags: {
          data: [
            {
              type: "taxonomy_term--tags",
              id: "tag123-4567-89ab-cdef-0123456789ab"
            },
            {
              type: "taxonomy_term--tags",
              id: "tag456-7890-abcd-ef01-23456789abcd"
            }
          ],
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/field_tags"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/field_tags"
            }
          }
        },
        uid: {
          data: {
            type: "user--user",
            id: "user1234-5678-90ab-cdef-0123456789ab"
          },
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/uid"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/uid"
            }
          }
        }
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8"
        }
      }
    },
    {
      type: "node--article",
      id: "article-2-uuid-test-mock-data",
      attributes: {
        drupal_internal__nid: 2,
        drupal_internal__vid: 2,
        langcode: "es",
        revision_timestamp: "2025-01-14T15:20:00+00:00",
        status: true,
        title: "Segundo Artículo de Ejemplo",
        created: "2025-01-14T15:00:00+00:00",
        changed: "2025-01-14T15:20:00+00:00",
        promote: true,
        sticky: false,
        default_langcode: true,
        revision_translation_affected: true,
        path: {
          alias: "/articulos/segundo-ejemplo",
          pid: 2,
          langcode: "es"
        },
        body: {
          value: "<p>Contenido del segundo artículo.</p>",
          format: "basic_html",
          processed: "<p>Contenido del segundo artículo.</p>",
          summary: "Resumen del segundo artículo"
        }
      },
      relationships: {
        node_type: {
          data: {
            type: "node_type--node_type",
            id: "d0d5d3f4-8e3a-4b4a-9c5e-1234567890ab"
          },
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/article-2-uuid-test-mock-data/node_type"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/article-2-uuid-test-mock-data/relationships/node_type"
            }
          }
        },
        field_image: {
          data: null
        },
        field_tags: {
          data: []
        },
        uid: {
          data: {
            type: "user--user",
            id: "user1234-5678-90ab-cdef-0123456789ab"
          },
          links: {
            related: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/article-2-uuid-test-mock-data/uid"
            },
            self: {
              href: "https://cms.asociacionpetis.org/jsonapi/node/article/article-2-uuid-test-mock-data/relationships/uid"
            }
          }
        }
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/node/article/article-2-uuid-test-mock-data"
        }
      }
    }
  ],
  included: [
    {
      type: "file--file",
      id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
      attributes: {
        drupal_internal__fid: 1,
        langcode: "es",
        filename: "test-image.jpg",
        uri: {
          value: "public://2025-01/test-image.jpg",
          url: "/sites/default/files/2025-01/test-image.jpg"
        },
        filemime: "image/jpeg",
        filesize: 245678,
        status: true,
        created: "2025-01-15T10:00:00+00:00",
        changed: "2025-01-15T10:00:00+00:00"
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/file/file/f1e2d3c4-b5a6-7890-1234-567890abcdef"
        }
      }
    },
    {
      type: "taxonomy_term--tags",
      id: "tag123-4567-89ab-cdef-0123456789ab",
      attributes: {
        drupal_internal__tid: 1,
        langcode: "es",
        name: "Derechos Animales",
        description: {
          value: "",
          format: null,
          processed: ""
        },
        weight: 0,
        changed: "2025-01-15T10:00:00+00:00",
        default_langcode: true
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/taxonomy_term/tags/tag123-4567-89ab-cdef-0123456789ab"
        }
      }
    },
    {
      type: "taxonomy_term--tags",
      id: "tag456-7890-abcd-ef01-23456789abcd",
      attributes: {
        drupal_internal__tid: 2,
        langcode: "es",
        name: "Activismo",
        description: {
          value: "",
          format: null,
          processed: ""
        },
        weight: 0,
        changed: "2025-01-15T10:00:00+00:00",
        default_langcode: true
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/taxonomy_term/tags/tag456-7890-abcd-ef01-23456789abcd"
        }
      }
    }
  ],
  links: {
    self: {
      href: "https://cms.asociacionpetis.org/jsonapi/node/article?include=field_image,field_tags"
    }
  }
};

export const mockSingleArticleResponse = {
  jsonapi: {
    version: "1.0",
    meta: {
      links: {
        self: {
          href: "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  data: {
    type: "node--article",
    id: "bc056031-76a9-4cae-a174-11f4265c65e8",
    attributes: {
      drupal_internal__nid: 1,
      drupal_internal__vid: 1,
      langcode: "es",
      revision_timestamp: "2025-01-15T10:30:00+00:00",
      status: true,
      title: "Artículo de Prueba - Derechos de los Animales",
      created: "2025-01-15T10:00:00+00:00",
      changed: "2025-01-15T10:30:00+00:00",
      promote: true,
      sticky: false,
      default_langcode: true,
      revision_translation_affected: true,
      path: {
        alias: "/articulos/derechos-animales-2025",
        pid: 1,
        langcode: "es"
      },
      body: {
        value: "<p>Este es un artículo de prueba sobre los derechos de los animales en 2025.</p>",
        format: "basic_html",
        processed: "<p>Este es un artículo de prueba sobre los derechos de los animales en 2025.</p>",
        summary: "Resumen del artículo sobre derechos animales"
      }
    },
    relationships: {
      node_type: {
        data: {
          type: "node_type--node_type",
          id: "d0d5d3f4-8e3a-4b4a-9c5e-1234567890ab"
        },
        links: {
          related: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/node_type"
          },
          self: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/node_type"
          }
        }
      },
      field_image: {
        data: {
          type: "file--file",
          id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
          meta: {
            alt: "Imagen de prueba sobre derechos animales",
            title: "",
            width: 1200,
            height: 800
          }
        },
        links: {
          related: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/field_image"
          },
          self: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/field_image"
          }
        }
      },
      field_tags: {
        data: [
          {
            type: "taxonomy_term--tags",
            id: "tag123-4567-89ab-cdef-0123456789ab"
          },
          {
            type: "taxonomy_term--tags",
            id: "tag456-7890-abcd-ef01-23456789abcd"
          }
        ],
        links: {
          related: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/field_tags"
          },
          self: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/field_tags"
          }
        }
      },
      uid: {
        data: {
          type: "user--user",
          id: "user1234-5678-90ab-cdef-0123456789ab"
        },
        links: {
          related: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/uid"
          },
          self: {
            href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8/relationships/uid"
          }
        }
      }
    },
    links: {
      self: {
        href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8"
      }
    }
  },
  included: [
    {
      type: "file--file",
      id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
      attributes: {
        drupal_internal__fid: 1,
        langcode: "es",
        filename: "test-image.jpg",
        uri: {
          value: "public://2025-01/test-image.jpg",
          url: "/sites/default/files/2025-01/test-image.jpg"
        },
        filemime: "image/jpeg",
        filesize: 245678,
        status: true,
        created: "2025-01-15T10:00:00+00:00",
        changed: "2025-01-15T10:00:00+00:00"
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/file/file/f1e2d3c4-b5a6-7890-1234-567890abcdef"
        }
      }
    },
    {
      type: "taxonomy_term--tags",
      id: "tag123-4567-89ab-cdef-0123456789ab",
      attributes: {
        drupal_internal__tid: 1,
        langcode: "es",
        name: "Derechos Animales",
        description: {
          value: "",
          format: null,
          processed: ""
        },
        weight: 0,
        changed: "2025-01-15T10:00:00+00:00",
        default_langcode: true
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/taxonomy_term/tags/tag123-4567-89ab-cdef-0123456789ab"
        }
      }
    },
    {
      type: "taxonomy_term--tags",
      id: "tag456-7890-abcd-ef01-23456789abcd",
      attributes: {
        drupal_internal__tid: 2,
        langcode: "es",
        name: "Activismo",
        description: {
          value: "",
          format: null,
          processed: ""
        },
        weight: 0,
        changed: "2025-01-15T10:00:00+00:00",
        default_langcode: true
      },
      links: {
        self: {
          href: "https://cms.asociacionpetis.org/jsonapi/taxonomy_term/tags/tag456-7890-abcd-ef01-23456789abcd"
        }
      }
    }
  ],
  links: {
    self: {
      href: "https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8?include=field_image,field_tags"
    }
  }
};

export const mockEmptyArticleListResponse = {
  jsonapi: {
    version: "1.0",
    meta: {
      links: {
        self: {
          href: "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  data: [],
  links: {
    self: {
      href: "https://cms.asociacionpetis.org/jsonapi/node/article"
    }
  }
};
