# Gruntの livereload を動かしてみる

## livereloadとは？

ファイルを保存したときにブラウザで読み込みなおしてくれるGruntのプラグインです。

### どうやって使うの？

Gruntfile.jsに設定して、gruntコマンドから起動します。

## 事前準備

以下はインストール済みとします。

- Node.js
- grunt-cli

## 動かしてみます

### Gruntプラグインのインストール

```
npm install grunt-contrib-watch grunt-contrib-connect
```

### 監視対象のファイルを作成
```
echo "hello" > index.html
```

### Gruntfile.jsの作成
こんな感じです。

```
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: 'index.html', //監視したいファイルを指定します。
      options: {
        livereload: true //livereloadを有効にします。
      }
    },
    connect: {
      uses_defaults: {} //空のサブタスクを入れます。名前は何でもいいです。ここではuses_defaultsにしました。
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
```

### 起動
```
grunt connect watch
```
逆にしたらあかんのや。connectに到達できない。

### ブラウザに拡張をインストール
[GoogleChrome拡張](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)を入れる

### ブラウザで開く
http://localhost:8000 を開いてアイコンをクリックして
アイコンマジ見づらいしねよｗｗｗ

### 変更してみる

index.htmlの中身を替えるとリロードする
```
touch index.html
```
