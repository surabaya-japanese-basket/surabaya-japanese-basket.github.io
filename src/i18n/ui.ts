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
    nav: { about: 'チーム紹介', join: '参加案内', faq: 'はじめての方へ', gallery: 'ギャラリー', contact: '連絡先', cta: '参加する' },
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
        { label: '場所', value: 'スラバヤ市内のバスケットボールコート（MAXICOURT Royal Surabaya、Golden City Mall、Ciputra World Surabaya、H.O.S.T Arena Basketball など）' }, // TODO: 会場名の追加・地図リンク
        { label: '参加費', value: 'Rp 50,000 前後（会場・人数により変わります）' },
        { label: '持ち物', value: '動きやすい服装・体育館シューズ・飲み物' },
      ],
      note: '人数が足りないときはローカルのインドネシアの方々を誘ったり、逆に参加させて頂いたりしています。',
      alert: '基本は毎週土曜に開催しています。会場は週によって変わるため、参加の前に、フォームか Instagram の DM でご連絡ください。',
    },
    faq: {
      heading: 'はじめての方へ',
      lead: 'よくいただく質問です。ここにないことは、フォームか Instagram の DM でお気軽にどうぞ。',
      items: [
        { q: '初心者でも大丈夫ですか？', a: '大丈夫です。初めての方から経験者まで、ゆるく楽しくプレーしています。' },
        { q: 'ブランクがあっても大丈夫ですか？', a: '大丈夫です。ブランクのない人のほうが少ないくらいなので、久しぶりの方も気軽にどうぞ。' },
        { q: '何を持っていけばいいですか？', a: '動きやすい服装、体育館シューズ、飲み物があれば大丈夫です。' },
        { q: '参加費はいくらですか？', a: 'Rp 50,000 前後です。会場や人数によって変わります。' },
        {
          q: 'いつ、どこでやっていますか？',
          a: '毎週土曜日の 16:00〜18:00 に、スラバヤ市内のバスケットボールコート（MAXICOURT Royal Surabaya、Golden City Mall、Ciputra World Surabaya、H.O.S.T Arena Basketball など）で練習しています。その週の場所は、フォームか Instagram の DM でご確認ください。',
        },
        {
          q: '人が少ないときはどうなりますか？',
          a: 'ハーフコートで楽しむことがあります。人数が足りないときはローカルのインドネシアの方々を誘ったり、逆に参加させて頂いたりしています。',
        },
        {
          q: '出張や旅行中でも参加できますか？',
          a: '歓迎します。申込フォームの「希望」で、「出張・旅行中に参加したい」を選んでください。',
        },
        { q: '申し込み方法は？', a: 'このページのフォーム、または Instagram の DM からどうぞ。' },
      ],
    },
    voice: {
      heading: 'キャプテンより',
      paragraphs: [
        'スラバヤでの勤務も半年が経ちました。',
        '本来であれば、慣れない環境での生活には時間がかかるものですが、近隣の飲食店やショッピングスポットなど、さまざまな情報を教えていただき、おかげさまでスムーズに生活に馴染むことができ、大変感謝しています。',
        'バスケットボールだけでなく、仕事面で役立つ繋がりやゴルフなど、これからさらに楽しみが増えていくことと思います。',
        '最近では、他国の方々と一緒にバスケットボールを楽しむ機会にも恵まれ、交流の輪が広がっていることを嬉しく感じています。',
        '是非一緒に、仕事とプライベートの両方を充実させながら、スラバヤでの生活を楽しみましょう☺',
      ],
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
    nav: { about: 'About', join: 'Join us', faq: 'FAQ', gallery: 'Gallery', contact: 'Contact', cta: 'Join' },
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
        { label: 'Place', value: 'Basketball courts around Surabaya (MAXICOURT Royal Surabaya, Golden City Mall, Ciputra World Surabaya, H.O.S.T Arena Basketball, and others)' },
        { label: 'Fee', value: 'Around Rp 50,000 (varies by venue and turnout)' },
        { label: 'Bring', value: 'Comfortable clothes, indoor court shoes, and a drink' },
      ],
      note: 'When we are short on players, we sometimes invite local Indonesian players to join us, or join local Indonesian teams ourselves.',
      alert: 'We basically play every Saturday. The venue changes from week to week, so please contact us through the form or an Instagram DM before you come.',
    },
    faq: {
      heading: 'New here?',
      lead: 'Answers to common questions. If yours is not here, use the form or send us a DM on Instagram.',
      items: [
        { q: 'Is it OK if I am a beginner?', a: 'Yes. Our members range from first-timers to experienced players, and we play in a relaxed, friendly way.' },
        { q: 'What if I have not played in years?', a: 'No problem. Most of our members have had a break from basketball, so you will fit right in.' },
        { q: 'What should I bring?', a: 'Comfortable clothes, indoor court shoes, and a drink are all you need.' },
        { q: 'How much does it cost?', a: 'Around Rp 50,000. It varies by venue and turnout.' },
        {
          q: 'When and where do you play?',
          a: 'Saturdays, 4:00 PM to 6:00 PM, at basketball courts around Surabaya (MAXICOURT Royal Surabaya, Golden City Mall, Ciputra World Surabaya, H.O.S.T Arena Basketball, and others). For that week\'s venue, please check with us through the form or an Instagram DM.',
        },
        {
          q: 'What happens when few people show up?',
          a: 'We sometimes play half-court. When we are short on players, we invite local Indonesian players to join us, or join local Indonesian teams ourselves.',
        },
        {
          q: 'Can I join while visiting Surabaya on business or travel?',
          a: 'Yes, visitors are welcome. In the form, choose "I want to join while on a business trip or traveling" under the preferences question. (The form is in Japanese.)',
        },
        { q: 'How do I apply?', a: 'Use the form on this page or send us a DM on Instagram.' },
      ],
    },
    voice: {
      heading: 'A word from our captain',
      paragraphs: [
        'It has been six months since I started working in Surabaya.',
        'Settling into a new environment usually takes time, but people shared all kinds of information with me, from nearby restaurants to shopping spots, so I was able to adjust smoothly. I am very grateful.',
        'Beyond basketball, I expect even more to look forward to, such as useful connections for work and golf.',
        'Recently I have also had chances to play basketball with people from other countries, and I am happy to see my circle of friends growing.',
        'Let us enjoy life in Surabaya together, making the most of both work and our private lives. ☺',
      ],
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
