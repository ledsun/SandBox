# 最初のCoffeeScript

## 背景

http://qiita.com/kzhrk/items/4b462f52037d16ac3741 でのやり取りでCoffeeScriptが生成する
デフォルト引数ありの関数にnullを渡したときの挙動を確認したく、CoffeeScriptを動かしてみました。

そのためhello worldにしては複雑すぎます。

```
hello = (target = "world") ->
  "hello #{target}"

console.log hello null
```

## 結論
結論は「nulllを渡されたら引数なしとして扱う」です。

「.Netのデフォルト引数みたいに呼び出し側で値を埋めている」わけではありません。


## 実行手順

```
npm install
./run.sh
```

gitbash では　run.sh の前の ./ が要りません。
