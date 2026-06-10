# GitHubアップロード手順

## 1. ZIPを解凍する

`hironobu-github-under100.zip` を解凍してください。

## 2. GitHubリポジトリを開く

公開したいリポジトリを開きます。

## 3. ファイルをアップロードする

GitHubの画面で以下を選びます。

`Add file` → `Upload files`

## 4. 中身をアップロードする

解凍した `hironobu-github-under100` フォルダを開き、**中身だけ**をアップロードしてください。

アップロード対象：

- `index.html`
- `assets` フォルダ
- `.nojekyll`
- `README.md`
- `GITHUB_UPLOAD_GUIDE.md`

フォルダごとではなく、中身をドラッグしてください。

## 5. Commitする

下の緑ボタン `Commit changes` を押してください。

## 6. GitHub Pagesを有効化する

`Settings` → `Pages` → `Build and deployment`

設定：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

保存後、数分待つとURLが発行されます。
