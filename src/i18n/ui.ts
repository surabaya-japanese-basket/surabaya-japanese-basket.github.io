export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const INSTAGRAM_URL = 'https://www.instagram.com/surabayajapanesebasket/';

// 参加・見学の申込フォーム（Google フォーム）。公開リンクのみ。回答はフォーム所有者が見る。
export const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSejE9ZqRkHOjg5ED4WZEpd48OgmKpiPvwkH64a5XzVKn9qF0w/viewform';
// 未確認の項目は TODO と明記。確定したらここだけ差し替える。
export const ui = {
  ja: {
    htmlLang: 'ja',
    siteName: 'スラバヤ日本人会バスケ部',
    title: 'スラバヤ日本人会バスケ部 | スラバヤ在住の日本人バスケチーム',
    description:
      'インドネシア・スラバヤ在住の日本人バスケチーム。毎週土曜の夕方に練習しています。初心者から経験者まで、ゆるーく活動中。',
    nav: { about: 'チーム紹介', join: '参加案内', gallery: 'ギャラリー', contact: '連絡先', cta: '参加する' },
    hero: {
      badge: 'メンバー募集中',
      eyebrow: 'Surabaya Japanese Basket',
      heading: 'スラバヤで、\nゆるく楽しくバスケ。',
      lead: 'スラバヤ在住の日本人バスケチームです。毎週土曜の夕方に練習しています。初心者から経験者まで、一緒にプレーしてくれる仲間を募集中です。',
      photoAlt: 'バスケの試合後に、日本人メンバーと対戦相手のみんなで撮った集合写真',
      cta: 'フォームで参加・見学を申込',
      ctaDm: 'Instagram の DM で相談',
      formNote: '名前と連絡先だけ、1分で送れます。',
      ctaSub: '参加案内を見る',
      langLink: 'English version',
    },
    about: {
      heading: 'チーム紹介',
      body: [
        'インドネシア・スラバヤに住む日本人が集まって活動しているバスケットボールチームです。',
        '年代は20代から50代まで。初めての方から経験者まで、ゆるーく楽しくプレーしています。',
        'インドネシアの方も数名、一緒にプレーしています。',
        '人数が少ない日は、ハーフコートで楽しむこともあります。気負わず、気軽に遊びに来てください。',
        'スラバヤへの出張・旅行の際の参加も歓迎です。',
      ],
      facts: [
        { label: '活動', value: '毎週土曜の夕方' },
        { label: '部員', value: '十数名' },
        { label: '年代', value: '20代〜50代' },
        { label: 'レベル', value: '初心者〜経験者' },
      ],
    },
    join: {
      heading: '参加案内',
      lead: '見学だけでも大丈夫です。まずは気軽にご連絡ください。',
      rows: [
        { label: '練習日', value: '毎週土曜日' },
        { label: '時間', value: '16:00〜18:00' },
        { label: '場所', value: 'MAXICOURT Royal Surabaya または Golden City Mall' }, // TODO: 住所・地図リンク
        { label: '参加費', value: 'Rp 50,000 前後（会場・人数により変わります）' },
        { label: '持ち物', value: '動きやすい服装・体育館シューズ・飲み物' },
      ],
      note: '人数が足りないときは、Golden City Mall でインドネシアの方々のチームに混ぜてもらうこともあります。その週の場所・開催状況は、フォームまたは Instagram の DM でお問い合わせください。',
    },
    gallery: {
      heading: 'ギャラリー',
      lead: '練習や交流試合の様子は Instagram で更新しています。',
      placeholder: '写真準備中',
      alt: 'バスケ部の練習風景',
      cta: 'Instagram で見る',
    },
    share: {
      heading: 'バナーで広めてください',
      lead: 'LINE のグループや SNS、掲示板など、どこに貼っていただいても大丈夫です。QRコードから、このサイトに来られます。',
      squareLabel: '正方形（Instagram・LINE）',
      storyLabel: 'ストーリー（縦長）',
      squareAlt: 'メンバー募集バナー（正方形）',
      storyAlt: 'メンバー募集バナー（ストーリー用の縦長）',
      download: 'ダウンロード',
      copyUrl: 'サイトのURLをコピー',
      copied: 'コピーしました',
    },
    contact: {
      heading: '連絡先',
      title: '一緒に、バスケしませんか？',
      lead: '参加希望・見学・スラバヤ出張時の参加など、フォームか Instagram の DM から、お気軽にどうぞ。',
      cta: 'フォームで参加・見学を申込',
      ctaDm: 'Instagram で DM する',    },
    tagline: 'スラバヤは、Sura（サメ）と Baya（ワニ）の街。',
    footer: '© スラバヤ日本人会バスケ部',
  },
  en: {
    htmlLang: 'en',
    siteName: 'Surabaya Japanese Basket',
    title: 'Surabaya Japanese Basket | A friendly basketball team in Surabaya',
    description:
      'A basketball team of Japanese residents in Surabaya, Indonesia. We practice every Saturday evening. Beginners to experienced players are all welcome.',
    nav: { about: 'About', join: 'Join us', gallery: 'Gallery', contact: 'Contact', cta: 'Join' },
    hero: {
      badge: 'Players wanted',
      eyebrow: 'Surabaya Japanese Basket',
      heading: 'Easygoing\nbasketball in Surabaya.',
      lead: 'We are a basketball team of Japanese residents in Surabaya. We practice every Saturday evening, and we are looking for more players, from beginners to experienced.',
      photoAlt: 'A group photo of our members and the opposing team after a game',
      cta: 'Apply to join or visit',
      ctaDm: 'Message us on Instagram',
      formNote: 'The form is in Japanese. Just your name and contact info.',
      ctaSub: 'How to join',
      langLink: '日本語版はこちら',
    },
    about: {
      heading: 'About the team',
      body: [
        'We are a basketball team made up of Japanese residents living in Surabaya, Indonesia.',
        'Our members are in their 20s to 50s, from first-timers to experienced players, and we play in a relaxed, friendly way.',
        'A few Indonesian players join us as well.',
        'On days when fewer people show up, we sometimes play half-court. No need to be nervous. Just come and join us.',
        'Visitors to Surabaya on business or travel are welcome to join, too.',
      ],
      facts: [
        { label: 'When', value: 'Saturday evenings' },
        { label: 'Members', value: 'Over 10' },
        { label: 'Ages', value: '20s – 50s' },
        { label: 'Level', value: 'Beginners to experienced' },
      ],
    },
    join: {
      heading: 'Join us',
      lead: 'Just want to watch? That is fine. Feel free to get in touch first.',
      rows: [
        { label: 'Day', value: 'Every Saturday' },
        { label: 'Time', value: '4:00 PM – 6:00 PM' },
        { label: 'Place', value: 'MAXICOURT Royal Surabaya or Golden City Mall' },
        { label: 'Fee', value: 'Around Rp 50,000 (varies by venue and turnout)' },
        { label: 'Bring', value: 'Comfortable clothes, indoor court shoes, and a drink' },
      ],
      note: 'When we are short on players, we sometimes join local Indonesian teams at Golden City Mall. For that week\'s venue and whether we are playing, please use the form or send us a DM on Instagram.',
    },
    gallery: {
      heading: 'Gallery',
      lead: 'We post photos of practices and friendly games on Instagram.',
      placeholder: 'Photos coming soon',
      alt: 'Practice at Surabaya Japanese Basket',
      cta: 'View on Instagram',
    },
    share: {
      heading: 'Help us spread the word',
      lead: 'Feel free to post these on LINE groups, social media, or bulletin boards. The QR code leads to this site.',
      squareLabel: 'Square (Instagram / LINE)',
      storyLabel: 'Story (vertical)',
      squareAlt: 'Players wanted banner (square)',
      storyAlt: 'Players wanted banner (vertical, for stories)',
      download: 'Download',
      copyUrl: 'Copy site URL',
      copied: 'Copied!',
    },
    contact: {
      heading: 'Contact',
      title: 'Come play with us.',
      lead: 'To join, visit, or drop in while you are in Surabaya, use the form or send us a DM on Instagram.',
      cta: 'Apply to join or visit',
      ctaDm: 'DM us on Instagram',    },
    tagline: 'Surabaya: the city of Sura (shark) and Baya (crocodile).',
    footer: '© Surabaya Japanese Basket',
  },
} as const;
