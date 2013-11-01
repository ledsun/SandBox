## grunt とは？
JavaScript開発でよく使うビルドツール。makeやrakeのJavaScript版です。
[Grunt: The JavaScript Task Runner](http://gruntjs.com/)にて公開されています。

### どうやって使うの？
コマンドラインから操作します。Node.jsのパッケージマネージャ(npm)を使ってインストールします。

## 事前準備
### Node.jsのインストール

#### Chocolatey 
Chocolateyを入れてないなら、コマンドプロンプトで以下のコマンドを実行しましょう。
```
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
```

#### Node.js
続いて
```
cinst nodejs.install
```

ChocolateyでNode.jsをインストールするパッケージにはnodejsとnodejs.installがあります。
nodejsはNode.js本体のみインストールし、npm（node.jsのパッケージマネージャコマンド）をインストールしません。
nodejs.installを指定してください。

### grunt-cliのインストール

```
npm install -g grunt-cli
```
コマンドプロンプトを管理者権限で起動していないと上手くいかないかもしれません。

## 動かしてみます
今回はgrunt-contribe-concatというgruntのプラグインを使用してファイルを結合します。

### 作業ディレクトリを作成
作業用ディレクトリを作成し、移動します。ここでは仮にgeorgesとしましょう。

```
mkdir georges
cd georges
```

### packege.jsonの作成
package.jsonはnpm用のプロジェクト定義ファイルです。
Mavenのpom.xmlやbundlerのGemfileに相当します。

```
npm init 
```
を実行すると対話形式で作成できます。
今回はすべての問いにEnterのみで答えてデフォルトのファイルを作ります。

こんな感じです。
```javascript
{
  "name": "georges",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "BSD-2-Clause"
}
```

### インストール
プラグインをインストールします。

```
npm install grunt-contribe-concat
```

以下の警告が出ます。これらはプロジェクトの説明が不足しているため表示されています。gruntを動かすだけなら問題ありません。無視して進めます。
```
npm WARN package.json georges@0.0.0 No description
npm WARN package.json georges@0.0.0 No repository field.
npm WARN package.json georges@0.0.0 No README data
```

### Gruntfile.jsを作成
Gruntの設定ファイルであるGruntfile.jsを作ります。

```javascript
module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: ['ge.txt', 'or.txt', 'ges.txt'],
				dest: 'georges.txt',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
```
initConfig の引数でタスクを指定します。
使用するプラグインをloadNpmTasksで読み込みます。

### 動かしてみる
作成したタスクを指定してgruntコマンドを実行します。
```
grunt concat
```

以下の表示が出れば成功です。
```
Running "concat:dist" (concat) task
File "georges.txt" created.
```

まだ結合する元ファイルが無いため作成されたgeorges.jsファイルは空です。

### 元ファイルを作成
結合元のファイルを用意します。UTF-8で作成しないと文字化けするので注意してください。

ge.txt
```
　 _ 　∩
```

or.txt
```
(　ﾟ∀ﾟ)彡　おっぱい！おっぱい！
```

ges.txt
```
　⊂彡
```

### もう一度実行
```
grunt concat
```

georges.txtの中身が次のようになっていれば成功です。
```
　 _ 　∩
(　ﾟ∀ﾟ)彡　おっぱい！おっぱい！
　⊂彡
```

## 今回使用したファイル
今回使用したファイルは[github](https://github.com/ledsun/SandBox/tree/master/JavaScript/georges)に公開しています。

## 参考図書
「WEB+DB PRESS Vol.77」に「Gruntでフロントエンド開発作業の自動化」という記事があります。

<a href="http://www.amazon.co.jp/exec/obidos/ASIN/4774159905/ledsun-22/ref=nosim/" rel="nofollow" ><img src="http://images-jp.amazon.com/images/P/4774159905.09.jpg" style="border: none;" alt="WEB+DB PRESS Vol.77" /></a>
