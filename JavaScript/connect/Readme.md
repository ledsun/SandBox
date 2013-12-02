#　動作確認

connect 単体でも grunt-contribe-connectのmidolewareオプションに指定するのと同じ関数が動くのが確認できた。

```
npm install connect
node hello.js
```

http://localhost:3000/ を開く

# 用途

だが、connectの使いどころは分からない。

単にStubサーバにしたいならhttps://github.com/cyberagent/node-easymock使えばいい気がする。
ちゃんとREST API Webアプリケーション作るならExpress使えばいい気がする。

もちろんWebアプリケーションフレームワークを作るときなんかは必要なんだろうけど・・・。そんなことしない。