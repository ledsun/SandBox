# 20140728

## nextの状況確認
- 淡々と進んでいるが、それほどのスピードでも
- あと３ヶ月くらい掛かるのでは？
- componentのgulpプラグイン使うのはやめたらしい
- componentタスクでcomponet.jsonを生成している
- grunttaskのファイル分割使っている
```
  // load custom tasks
  grunt.file.recurse('tasks', function (path) {
    require('./' + path)(grunt)
  })
```

## 前回のおさらい

- まるっきり意味が分からん・・・
- 操作説明を記入

## diffをやってみた
```
open index.html
```

## その他の発見

- inputイベントがある
- Directivesの使い方はさっぱりわからん
- v-partialが良さげ
    - しかし使い方が分からない
    - expressionがidになる
    - expressionはDirective呼び出し時の引数全体らしい
    - elは多分directiveを指定したnodeだな
    - partialが追加/に置き換えられる
    - partialsからidをkeyで取ってくる
    - partialsってどうやって指定するだ？
    - compiler.getOptionでとるなら起動オプション？
- templateが流行った
