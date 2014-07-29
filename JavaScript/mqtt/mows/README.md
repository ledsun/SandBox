# mows

https://www.npmjs.org/package/mows

mqtt.jsのWebSocket対応版。
一番好き。

- JavaScriptっぽく書ける
- npm installできるし
- browserifyで使いやすい
- 認証対応
- 接続できないとちゃんとエラーが出る

## サンプル

```
npm install mows
browsorify mows_sample.js -o bundle.js
export JAVA_HOME=$(/usr/libexec/java_home)
"/usr/local/var/apollo/bin/apollo-broker" run
open index.html
```

コンソールにメッセージを表示します。
