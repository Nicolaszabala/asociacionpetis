import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

function maskToken(token?: string): string | null {
  if (!token) {
    return null;
  }

  if (token.length <= 10) {
    return "***";
  }

  return `${token.slice(0, 6)}...${token.slice(-4)}`;
}

export async function GET() {
  const env = {
    hasInstagramUserId: Boolean(INSTAGRAM_USER_ID),
    hasInstagramAccessToken: Boolean(INSTAGRAM_ACCESS_TOKEN),
    instagramUserId: INSTAGRAM_USER_ID || null,
    instagramAccessTokenMasked: maskToken(INSTAGRAM_ACCESS_TOKEN),
  };

  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    return NextResponse.json(
      {
        ok: false,
        env,
        reason: "Missing Instagram environment variables",
      },
      { status: 500 }
    );
  }

  const url =
    `https://graph.facebook.com/v19.0/${INSTAGRAM_USER_ID}/media` +
    `?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp` +
    `&limit=3` +
    `&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const raw = await response.text();
    let parsed: unknown = null;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = raw;
    }

    const posts =
      parsed && typeof parsed === "object" && parsed !== null && "data" in parsed && Array.isArray(parsed.data)
        ? parsed.data
        : [];

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      env,
      postCount: posts.length,
      samplePosts: posts.map((post: any) => ({
        id: post.id,
        timestamp: post.timestamp,
        permalink: post.permalink,
        captionPreview: typeof post.caption === "string" ? post.caption.slice(0, 80) : null,
      })),
      raw: parsed,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        env,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
