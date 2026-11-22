// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages（プロジェクトサイト）用。独自ドメインにしたら base を外す。
export default defineConfig({
  site: 'https://yukinw6.github.io',
  base: '/surabaya-basketball',
});
