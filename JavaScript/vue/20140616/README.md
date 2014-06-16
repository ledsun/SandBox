# 20140616

## リンク

- http://vuejs.org/
- https://gist.github.com/koba04/9776792
- http://blog.koba04.com/vuejs-book/

## 作ったもの

- index.html

## わかったこと

- 基本的なこと
    - elで指定した要素のみ処理する
        - 名前空間的な
    - v-model属性で指定した変数にバインドされる
    - {{}}でモデルの変数を指定すると展開される
- filterを動かした
    - http://vuejs.org/guide/filters.html
    - reverseが動かない
        - built-in filterじゃなかった！
        - custom filter定義はnew Vueより先にやること
        - custom filterの第一引数は|の左の値
    - pluralize st nd rd th は変換後の文字だけ返す。数字を消す。
        - http://vuejs.org/api/filters.html#pluralize
            - exampleは動かない
        - 数字は消えるのが正解
            - ['single', 'double', 'triple', 'multiple']を指定する想定
    - filterByのdataKey引数が効かない
        - filterByはデフォルトではモデルの全プロパティを見る
        - dataKeyでプロパティ名を指定できるはずなのに・・・
            - くっそ！シングルクォートすれば動いた
            - シングルクォートなしは変数名を指定
            - 絞り込み条件をセレクトボックスで切り替えるのを想定？
    - orderByは時間切れ

## 疑問点

- selectの扱い
    - http://vuejs.org/guide/forms.html
    - 名前を付けられないのか？
    - そもそもoptionをバインドできないの？
- ビルド
    - component.jsを使っているようだ
    - https://github.com/yyx990803/vue/blob/master/tasks/dev.js
