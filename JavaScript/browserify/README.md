## これは何？
browserifyはnode.js用のモジュールをブラウザで動くように変形します。

まず[substack/browserify-handbook](https://github.com/substack/browserify-handbook)を見るのがよい。

インストール
```
npm install -g browserify
npm install uniq
npm install underscore
```

ビルド
```
browserify main.js -o bundle.js
```

watch
```
watchify main.js -o bundle.js -v
```

`-v`はリロード動作を表示するためのオプション

`-d`をつけるとsource mapを作ってくれる。
Google chromeなら元のファイルを見てブレークポイントを貼って
デバッグすることも可能。
開発時は-dを付けておいて、リリース時は-d無しでビルドし直すのが良さそう。

## 疑問

- gruntとの連携はどうすればいいのだろうか？
- qunit使わなくてもテストコードが書けるのではなかろうか？
