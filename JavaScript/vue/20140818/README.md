# 20140818

## 今日は何をする？
- [Guide](http://vuejs.org/guide/)の残りを順番にやっつけよう

### Computed Properties
- イメージ通りに動いている
- Dependency Collection Gotcha って書いてあるのは何のことやらわからん

### Adding Transition Effects
#### animated
- css animationは動かん！
    - ブラウザプレフィックスが足らんかった

#### JavaScript Functions
- サンプルになってないやんけ！
- あんま使わないから飛ばそう

### Composing Components
- 「htmlの標準タグとかぶらないよう、名前に`-`入れて」だって
- `Vue.component()`にVueのサブクラス以外が渡されたら勝手に`Vue.extend()`するらしい
- v-componentに登録していないコンポーネントを指定したら、console.warnが出て来た。意外と親切
- 入れ子にできる
    - ただし内側の要素からnewすること
- 子から親の要素を更新できる
- v-repeatにv-component指定できるのいいなあ
- component間の通信方法もある
    - `v-ref`で子供の参照する名前がつけられる
    - `$dispatch`で親にイベントが投げられる
- directivesってなんだっけ？
    - v-で、はじまるやつ
    - なんかいろいろある
    - これは素振っていない

### 作ったもの
```
open index.html
```

## QA
- 他のビューモデルを参照するには？
    - `v-ref`を使う
- ビューモデルに共通部分があったら？
    - Vue.extendを使って継承する
    - BaseVue.extendとか
- 複数のモジュールを使う時はcomponetとbrowserifyどっちを使う？
    - componentの方が綺麗に書けるけど、browserifyの方が自由度が高い

## その他
- あとで寄付しよう
    - https://www.gittip.com/yyx990803/
- ようやくおわりが見えた！
    - なんとかアプリケーション作成に使えそう
    - 多分10時間くらいで何とかなりそう
        - html, css, javascriptを知っていれば
    - これ、この先どうすんだろ？よりマニアックな使い方を追求して行く？
        - グラフとの組み合わせはやりたい
    - まだもう二時間ぐらいは素振りを続けた方がいい
        - Directives
        - Componentの残り
        - Building Larger Apps
- nextブランチがめっちゃ進んでた
