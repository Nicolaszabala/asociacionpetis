import { describe, expect, it } from "vitest";
import { transformInstagramPostToArticle } from "@/lib/instagram/client";

describe("Instagram Client: transformInstagramPostToArticle", () => {
  it("should transform an image post into the shared article shape", () => {
    const article = transformInstagramPostToArticle({
      id: "17890000000000001",
      caption: "Obradoiro de porteo\n\nCompartimos unha tarde preciosa coa tribo. #crianza #petis",
      media_type: "IMAGE",
      media_url: "https://scontent.cdninstagram.com/example.jpg",
      permalink: "https://www.instagram.com/p/abc123/",
      timestamp: "2026-04-03T10:00:00+0000",
    });

    expect(article).toMatchObject({
      id: "17890000000000001",
      title: "Obradoiro de porteo",
      imageUrl: "https://scontent.cdninstagram.com/example.jpg",
      externalUrl: "https://www.instagram.com/p/abc123/",
      source: "instagram",
    });

    expect(article.slug).toContain("2026-04-03-obradoiro-de-porteo");
    expect(article.tags).toEqual(["crianza", "petis"]);
    expect(article.content).toContain("<p>Obradoiro de porteo</p>");
  });

  it("should prefer the thumbnail for video posts", () => {
    const article = transformInstagramPostToArticle({
      id: "17890000000000002",
      caption: "Resumo da actividade",
      media_type: "VIDEO",
      media_url: "https://video.cdninstagram.com/example.mp4",
      thumbnail_url: "https://scontent.cdninstagram.com/preview.jpg",
      permalink: "https://www.instagram.com/p/video123/",
      timestamp: "2026-04-02T10:00:00+0000",
    });

    expect(article.imageUrl).toBe("https://scontent.cdninstagram.com/preview.jpg");
  });
});
