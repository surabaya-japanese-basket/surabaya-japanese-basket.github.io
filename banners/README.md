# 配布用バナー / OGP 画像

`public/banners/` の画像は、`banners/template.html` から自動生成しています。
文言やデザインを変えたいときは、テンプレートを編集して再生成してください。

```
npx playwright install chromium   # 初回のみ
npm run banners
```

| ファイル | サイズ | 用途 |
|---|---|---|
| `ogp.png` | 1200×630 | サイトのリンクプレビュー（LINE / Instagram / X など）。サイトの `<meta og:image>` が参照 |
| `banner-square.png` | 1080×1080 | Instagram 投稿、LINE グループ、掲示用 |
| `banner-story.png` | 1080×1920 | Instagram ストーリー（上下はUIが重なるので余白を確保） |

公開後は次の URL でも取得できます。
`https://surabaya-japanese-basket.github.io/banners/banner-square.png`

- QR コードは `render.mjs` 内の `SITE` の URL から生成します。ドメインを変えたら再生成してください。
- 写真は使わず、イラストだけにしています（広く出回るため）。
