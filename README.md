# RyomaQuiz

りょうまさんのnote記事「りょうまってどんな人？自己紹介記事！」をもとにした、ブラウザで遊べるプロフィール4択クイズです（りょうま公式）。

- **出典**: `https://note.com/ryoma_dq/n/nf99e99386e84`

## 遊び方

1. このリポジトリの `index.html` をブラウザで開きます。
2. 「スタート」を押してクイズ開始。

- **キーボード操作**: 1〜4で選択、Enterで次へ

## GitHub Pages（自動デプロイ）

`main` ブランチに push されるたびに GitHub Actions で GitHub Pages へデプロイされます。

- **カスタムドメイン**: `ryomaquiz.vvil.jp`
- **設定ファイル**: `CNAME` / `.github/workflows/pages.yml`

### 初回だけ必要なGitHub側設定

リポジトリの **Settings → Pages** で以下を設定してください。

- **Build and deployment / Source**: **GitHub Actions**
- **Custom domain**: `ryomaquiz.vvil.jp`（入力後、DNSチェックが通るのを待って保存）
- **Enforce HTTPS**: 有効化（DNS/証明書の準備が整うとONにできます）

### DNS設定（`ryomaquiz.vvil.jp`）

DNSに **CNAMEレコード** を追加してください。

- **Name**: `ryomaquiz`
- **Type**: `CNAME`
- **Value**: `vryoma.github.io`

## ファイル構成

- `index.html`: 画面
- `styles.css`: 見た目
- `app.js`: 問題データとゲームロジック
