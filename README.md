# 居酒屋ヒロノブ Webサイト

GitHubでアップロードしやすいように、ファイル総数100未満に整理した静的サイト版です。

## GitHub Pagesで公開する場合

このフォルダの中身を、GitHubリポジトリのルート直下へアップロードしてください。

アップロードするもの：

- `index.html`
- `assets` フォルダ
- `.nojekyll`
- `README.md`
- `GITHUB_UPLOAD_GUIDE.md`

`react-source`、`dist`、`node_modules` は不要です。

## ローカル確認

`index.html` をダブルクリックして確認できます。
表示されない場合は、VS Codeの Live Server か、以下で確認してください。

```bash
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開いてください。
