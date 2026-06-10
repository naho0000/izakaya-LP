# GitHubアップロード手順

1. ZIPを解凍
2. `hironobu-iphone-optimized` フォルダを開く
3. 中身をすべて選択
4. GitHubのリポジトリで `Add file` → `Upload files`
5. ドラッグ＆ドロップ
6. `Commit changes`
7. `Settings` → `Pages`
8. `Deploy from a branch`
9. Branchを `main`、フォルダを `/root` にする
10. 表示されたURLをiPhoneのSafariで開く

## アップロードするもの

- index.html
- assets フォルダ
- manifest.webmanifest
- .nojekyll
- README.md
- IPHONE_VIEW_GUIDE.md

## アップロードしないもの

- ZIPファイルそのもの
- node_modules
- Reactの開発用フォルダ
