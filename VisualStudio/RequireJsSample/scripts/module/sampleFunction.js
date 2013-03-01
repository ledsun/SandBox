//モジュールで関数を定義することもできます。define()に関数を返す関数を渡します。
define(function () {
    return function (a, b) {
        return a + b;
    };
});
