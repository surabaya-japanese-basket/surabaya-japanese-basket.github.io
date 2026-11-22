import type { APIRoute } from 'astro';

// 検索エンジン向けのサイトマップ。日英の2ページを、互いの言語版として関連づける。
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const ja = new URL(`${base}/`, site).href;
  const en = new URL(`${base}/en/`, site).href;

  const entry = (loc: string) =>
    [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="ja" href="${ja}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${ja}"/>`,
      '  </url>',
    ].join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entry(ja),
    entry(en),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
