module.exports = function(grunt) {
  grunt.initConfig({
    watch: {}, //connectサーバを待ち受けループにするために必要です。
    connect: {
      server: {
        options: {
          middleware: function(connect, options) {
            return [
              connect.static(options.base), 　 // 静的サーバ機能

              //オリジナルの処理
              function(req, res, next) {
                if (req.method === "GET") {
                  path = require("url").parse(req.url).pathname; // reqのurlからファイル名を取得

                  if (path === "/hello.html") {
                    res.setHeader("Content-Type", "text/html; charset=UTF-8"); // レスポンスヘッダで文字コードを設定
                    res.end('<html>' + Date() + '</html>');
                  } else if (path === "/noresponse") {
                    // わざとレスポンスを返さない
                  } else {
                    // 想定していないURLの場合は404を返します。返さないとブラウザがレスポンスを待ち続けます。
                    res.statusCode = 404;
                    res.end(path + ' is not exists.');
                  }
                } else if (req.method === "POST") {
                  // 送信データはいくつかのブロックに分かれて送られてきます。受信するたびに受信データを結合します。
                  var fullBody = '';
                  req.on('data', function(chunk) {
                    fullBody += chunk.toString();
                  });

                  req.on('end', function() {
                    var decodedBody = require('querystring').parse(fullBody); // 受信データをオブジェクトとして扱えるようにデコードします。

                    require("fs").writeFile(req.url.substr(1), decodedBody.name); // URLをファイル名として保存します。

                    res.end(fullBody);　 // 受信内容をそのまま表示します。
                  });
                }　
              }
            ];
          },
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};