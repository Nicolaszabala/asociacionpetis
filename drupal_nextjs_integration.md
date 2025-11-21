# Integración Drupal Headless CMS + Next.js Frontend

## 📋 Resumen del Proyecto

Estamos integrando un CMS Drupal 11 como backend headless con un frontend Next.js existente desplegado en Vercel para el sitio de Asociación Petís.

---

## 🏗️ Arquitectura Actual

### Frontend (Next.js)
- **Hosting**: Vercel
- **Dominio**: `https://asociacionpetis.org`
- **Estado**: Desplegado y funcionando

### Backend (Drupal 11)
- **Hosting**: Lucushost (cPanel)
- **URL CMS**: `https://cms.asociacionpetis.org`
- **Versión**: Drupal 11
- **Estado**: Instalado y configurado

---

## ✅ Configuración Completada en Drupal

### 1. Accesos al Hosting
**cPanel**:
- URL: `https://hl120.lucushost.org/cpanel`
- Usuario: `uymgvkjv`
- Contraseña: `OBUFc1l03mo)[6`

**FTP**:
- Host: `ftp.asociacionpetis.org`
- Usuario: `uymgvkjv`
- Contraseña: `OBUFc1l03mo)[6`

### 2. Módulo JSON:API
- ✅ **Activado** en Drupal
- ✅ Configurado para **solo lectura** (read-only operations)
- ✅ Endpoint principal: `https://cms.asociacionpetis.org/jsonapi`
- ✅ Artículos disponibles en: `https://cms.asociacionpetis.org/jsonapi/node/article`

### 3. CORS Configurado
Archivo: `/public_html/cms/sites/default/services.yml`

```yaml
cors.config:
  enabled: true
  allowedHeaders: ['*']
  allowedMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  allowedOrigins: ['https://asociacionpetis.org', 'http://localhost:3000']
  allowedOriginsPatterns: []
  exposedHeaders: false
  maxAge: false
  supportsCredentials: true
```

### 4. Trusted Host Patterns
Archivo: `/public_html/cms/sites/default/settings.php`

```php
$settings['trusted_host_patterns'] = [
  '^cms\.asociacionpetis\.org$',
  '^hl120\.lucushost\.org$',
];
```

### 5. Permisos de Usuario Anónimo
- ✅ **View published content** habilitado
- ✅ Acceso GET a recursos JSON:API permitido

### 6. Contenido de Prueba
**Artículo creado**: "saude respiratoria"
- Node ID: 1
- UUID: `bc056031-76a9-4cae-a174-11f4265c65e8`
- Incluye: título, body (HTML), imagen, tags
- URL JSON: `https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8`

---

## 📊 Estructura de Datos JSON:API

### Respuesta de Artículos
```json
{
  "jsonapi": {...},
  "data": [
    {
      "type": "node--article",
      "id": "bc056031-76a9-4cae-a174-11f4265c65e8",
      "attributes": {
        "drupal_internal__nid": 1,
        "title": "saude respiratoria",
        "created": "2025-11-19T14:09:52+00:00",
        "changed": "2025-11-19T14:21:06+00:00",
        "path": {
          "alias": "/saude-respiratoria",
          "pid": 1,
          "langcode": "en"
        },
        "body": {
          "value": "<p>contenido HTML...</p>",
          "format": "full_html",
          "processed": "<p>contenido procesado...</p>"
        }
      },
      "relationships": {
        "field_image": {
          "data": {
            "type": "file--file",
            "id": "059f5697-70b6-44d9-a6f2-3061822999d5"
          }
        },
        "field_tags": {
          "data": [
            {
              "type": "taxonomy_term--tags",
              "id": "0d65fe5a-f551-4d43-8c95-b7929c9762ea"
            }
          ]
        }
      }
    }
  ],
  "included": [
    {
      "type": "file--file",
      "id": "059f5697-70b6-44d9-a6f2-3061822999d5",
      "attributes": {
        "uri": {
          "url": "/sites/default/files/2025-11/image.jpg"
        }
      }
    }
  ]
}
```

---

## 🎯 Tareas Pendientes para el Frontend Next.js

### 1. Configuración de Variables de Entorno
Añadir en Vercel (Settings → Environment Variables):
```
NEXT_PUBLIC_DRUPAL_BASE_URL=https://cms.asociacionpetis.org
```

También añadir en `.env.local` para desarrollo:
```
NEXT_PUBLIC_DRUPAL_BASE_URL=https://cms.asociacionpetis.org
```

### 2. Crear Utilidad de Drupal
Crear archivo `lib/drupal.js` (o `lib/drupal.ts`):

```javascript
const DRUPAL_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;

export async function getArticles() {
  const res = await fetch(
    `${DRUPAL_BASE_URL}/jsonapi/node/article?include=field_image,field_tags`,
    {
      headers: {
        'Accept': 'application/vnd.api+json',
      },
      next: { revalidate: 60 } // ISR - revalida cada 60 segundos
    }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  const json = await res.json();
  return json;
}

export async function getArticleByUuid(uuid) {
  const res = await fetch(
    `${DRUPAL_BASE_URL}/jsonapi/node/article/${uuid}?include=field_image,field_tags`,
    {
      headers: {
        'Accept': 'application/vnd.api+json',
      },
      next: { revalidate: 60 }
    }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch article');
  }
  
  const json = await res.json();
  return json;
}

// Helper para obtener URL de imagen desde included
export function getImageUrl(included, imageId) {
  if (!included || !imageId) return null;
  
  const image = included.find(item => item.id === imageId);
  if (!image) return null;
  
  return `${DRUPAL_BASE_URL}${image.attributes.uri.url}`;
}

// Helper para obtener tags desde included
export function getTags(included, tagIds) {
  if (!included || !tagIds) return [];
  
  return tagIds.map(tagData => {
    const tag = included.find(item => item.id === tagData.id);
    return tag ? tag.attributes.name : null;
  }).filter(Boolean);
}
```

### 3. Revisar Estructura del Proyecto
**IMPORTANTE**: Antes de implementar, el agente debe:
1. Revisar si el proyecto usa **App Router** (Next.js 13+) o **Pages Router**
2. Identificar el sistema de estilos (Tailwind, CSS Modules, styled-components, etc.)
3. Verificar si existe alguna estructura de blog o contenido existente
4. Identificar componentes reutilizables disponibles
5. Revisar el layout y estructura de navegación actual

### 4. Implementar Página de Blog
Según la estructura encontrada, crear/adaptar:

**Si usa App Router** (`app/` directory):
- `app/blog/page.js` - Lista de artículos
- `app/blog/[slug]/page.js` - Detalle de artículo

**Si usa Pages Router** (`pages/` directory):
- `pages/blog/index.js` - Lista de artículos
- `pages/blog/[slug].js` - Detalle de artículo

### 5. Implementar Componentes
Crear componentes según el sistema de diseño existente:
- `ArticleCard` - Tarjeta para mostrar artículo en lista
- `ArticleDetail` - Vista detallada de artículo
- Componentes de imagen optimizada con `next/image`

### 6. Manejo de Imágenes
Configurar `next.config.js` para permitir imágenes de Drupal:

```javascript
module.exports = {
  images: {
    domains: ['cms.asociacionpetis.org'],
  },
}
```

### 7. Consideraciones de SEO
- Usar metadata de Drupal para generar tags SEO
- Implementar `generateMetadata` (App Router) o `getStaticProps` + Head (Pages Router)
- Aprovechar el campo `path.alias` de Drupal para URLs amigables

---

## 🔍 URLs de Prueba y Verificación

### Drupal Backend
- **Admin**: `https://cms.asociacionpetis.org/user/login`
- **Todos los artículos JSON**: `https://cms.asociacionpetis.org/jsonapi/node/article`
- **Artículo específico JSON**: `https://cms.asociacionpetis.org/jsonapi/node/article/bc056031-76a9-4cae-a174-11f4265c65e8`
- **Con imágenes y tags incluidos**: `https://cms.asociacionpetis.org/jsonapi/node/article?include=field_image,field_tags`

### Frontend
- **Sitio actual**: `https://asociacionpetis.org`
- **Blog futuro**: `https://asociacionpetis.org/blog` (a implementar)

---

## 📝 Notas Importantes

### Características JSON:API de Drupal
- Los IDs son **UUIDs**, no node IDs numéricos
- Las relaciones (imágenes, tags) vienen en el array `included`
- El body viene con HTML procesado en `attributes.body.processed`
- Las URLs de imagen son relativas, necesitan el dominio base

### Revalidación y Caché
- Usar ISR (Incremental Static Regeneration) con `revalidate: 60`
- Considerar webhooks de Drupal para revalidación on-demand en el futuro
- La caché de Drupal debe limpiarse después de cambios importantes

### Seguridad
- CORS ya configurado para `asociacionpetis.org` y `localhost:3000`
- Solo operaciones de lectura habilitadas en JSON:API
- No se requiere autenticación para contenido público

---

## 🚀 Próximos Pasos Sugeridos

1. **Revisar código existente** del frontend Next.js
2. **Añadir variables de entorno** en Vercel y localmente
3. **Crear utilidad Drupal** (`lib/drupal.js`)
4. **Implementar página de blog** adaptada al diseño existente
5. **Probar integración** en local
6. **Deploy a Vercel** y verificar producción
7. **Crear más contenido** en Drupal
8. **Optimizar rendimiento** (ISR, imágenes, etc.)

---

## 🐛 Troubleshooting

### Si hay errores CORS
- Verificar que el dominio esté en `allowedOrigins` en `services.yml`
- Limpiar caché de Drupal: `/admin/config/development/performance`

### Si las imágenes no cargan
- Verificar que `cms.asociacionpetis.org` esté en `next.config.js` → `images.domains`
- Verificar permisos de `/public_html/cms/sites/default/files` (755)

### Si JSON:API no responde
- Verificar que el módulo JSON:API esté activado
- Verificar permisos de usuario anónimo
- Verificar trusted_host_patterns en settings.php

---

## 📞 Contacto y Recursos

- **Hosting Support**: Lucushost - https://panel.lucushost.com/clientarea.php
- **Drupal Documentation**: https://www.drupal.org/docs
- **JSON:API Specification**: https://jsonapi.org/
- **Next.js Documentation**: https://nextjs.org/docs

---

**Fecha de última actualización**: 19 de Noviembre, 2025