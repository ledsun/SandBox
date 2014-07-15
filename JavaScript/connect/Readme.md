# 動作確認

connect 単体でも grunt-contribe-connectのmidolewareオプションに指定するのと同じ関数が動くのが確認できた。

```
npm install connect serve-static
node hello.js
open http://localhost:3000/
```

# 用途

connectはミドルウェアを組み合わせてミニマムなhttpサーバーを作るために使います。

- Stubサーバがほしいならhttps://github.com/cyberagent/node-easymockを使えばいい
- REST API Webアプリケーション作るならExpressを使えばいい

# ver3

標準ミドルウェアが減った。
例えばconnect-staticはなくなっている。
代わりにserve-staticを使います。
