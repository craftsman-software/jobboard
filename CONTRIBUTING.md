# Contributing

## ローカル環境のセットアップ

必要なもの:

- Node.jsを入れておく: `brew install node`
- PNPMをいれておく: `npm install -g pnpm`

リポジトリをクローンする:

```bash
git@github.com:craftsman-software/jobboard.git
cd jobboard
```

ツールをインストールする:

```bash
pnpm install
```

## 募集要項を編集する

編集用のブランチを作る:

```bash
git checkout -b update_post main
```

postsの中のMarkdownファイルを編集し、保存する。

誤字脱字などをチェックする:

```bash
pnpm textlint
```

問題がある箇所を修正します。`pnpm textlint:fix`で自動修正できる場合があります。

コミットする前に変更内容を確認します:

```bash
git add -A
git diff --staged
```

コミットします:

```bash
pnpx git-cz
```

このとき、「Select the type of change that you're committing」では、`open`,`close`, `fix`などから適切な変更内容を選んでください。
「Write a short, imperative mood description of the change:」では、「システム保守エンジニアの募集内容が新しくなりました。」「インフラエンジニアの募集が終了しました。」など、募集要項を見る人に向けた分かりやすい変更内容を書いてください。

GitHubにpushします:

```bash
git push -u origin update_post
```

GitHubでプルリクエストを作成します。
