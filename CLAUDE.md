# スラバヤ日本人会バスケ部サイト — 作業メモ

メンバー募集が目的の、日本語（主）+ 英語の静的サイト。Astro 製。GitHub Pages で配信。
公開リポジトリなので、**個人のメールアドレス・本名・未確認の事実は書かない**。

- 公開URL: https://surabaya-japanese-basket.github.io/ （英語版は `/en/`）
- リポジトリ: `surabaya-japanese-basket/surabaya-japanese-basket.github.io`（GitHub 組織）
- ローカル: `~/surabaya-basketball/`
- デプロイ: `main` に push → GitHub Actions（`.github/workflows/deploy.yml`）→ Pages。定期実行はなし

## 環境（WSL）
- 非対話シェルには nvm が入らない。コマンドの先頭で `source ~/.nvm/nvm.sh` を実行する（Node 24 系。apt の Node 18 は削除済み）。
- `npm run dev` / `npm run build` / `npm run preview`（`astro preview --port 4399` で確認すると楽）。
- パッケージ管理は npm。Python の uv は、このリポジトリでは使わない。
- `/mnt/c` 以下（Windows 側）には触れない。写真を取り込むときは、**ファイル単位でユーザーの許可を取ってから**、その1ファイルだけ読み取りコピーする。

## 構成
- 文言は全部 `src/i18n/ui.ts`（`ja` / `en`）。確認済みの事実だけが入っている。定数 `INSTAGRAM_URL` / `FORM_URL` もここ。
- ページ: `src/pages/index.astro`（日本語）と `src/pages/en/index.astro`。中身は共通の `src/components/Home.astro`。
- レイアウトとヘッダー・フッター・メタ情報（OGP・構造化データ・hreflang）: `src/layouts/Base.astro`。
- スタイル: `src/styles/global.css`（配色は `:root` の変数。白8:緑2）。
- 装飾イラスト（サメの背びれ＋ワニ。仮の自作）: `src/components/Mascots.astro`。ユニフォームの素材が来たら差し替える。
- 検索向け: `src/pages/sitemap.xml.ts`、`public/robots.txt`、`public/google*.html`（Search Console の所有権確認ファイル。**消さない**）。

## 写真
- ギャラリー: `src/assets/gallery/NN.jpg`。ファイル名順に並ぶ。**1枚目はトップのヒーロー写真にも使われる**。
- 追加の前に、必ず EXIF 除去＋縮小（長辺1600px、mozjpeg 品質80）。例:
  `sharp(p).rotate().resize({width:1600,withoutEnlargement:true}).jpeg({quality:80,mozjpeg:true})`
- ファイル名に日本語や行事名を残さない（`01.jpg` 形式）。
- 公開リポジトリなので、一度 push した画像は Git 履歴に残る。個人が特定できる写真は、公開前に本人の了承を確認する。
- `src/assets/people/` は、ギャラリーに混ざらない個人写真用の空フォルダ（未使用）。

## 配布バナー / OGP 画像
- 元は `banners/template.html`、書き出しは `npm run banners`（`banners/render.mjs`。Playwright + qrcode は devDependencies）。
- 出力: `public/banners/ogp.png`（1200×630）、`banner-square.png`、`banner-story.png`。サイトの「バナーで広めてください」に表示される。
- 文言を変えたら再生成して、**QR が読めるか**を確認する（jsQR で、サイトURLにデコードできること）。
- Chromium は `npx playwright install chromium`。sudo なしで足りない共有ライブラリ（libnspr4, libnss3, libasound2t64）は、
  `apt-get download` した deb を `dpkg -x` で任意のディレクトリに展開し、`LD_LIBRARY_PATH` で通す。

## 確認のしかた（変更のたびに）
1. `npm run build` が通る。
2. プレビューを立て、Playwright で 390px / 1280px のスクリーンショットを撮って目視。横スクロールが出ていないことも確認（日英ともに）。
3. push 後は `gh run watch` でデプロイ成功を待つ。公開サイトの反映は1分ほど遅れることがあるので、`?v=乱数` を付けて確認する。

## 文言の方針（ユーザーの意向）
- 「初心者〜経験者」の書き方はそのまま。「経験不問」「やる気のある方」のような、**ハードルを上げる言い方は使わない**。
- 事実として確認が取れていないことは書かない（例: 見学の可否、女性の参加、言語の条件、雨天時の扱い）。
- 参加案内の「見学だけでも大丈夫です」は、まだ運用確認が取れていない。
- 問い合わせの窓口は、Google フォームが主、Instagram の DM が副（Instagram のアカウントはユーザーが管理していない）。
