//事前処理が必要な場合は、オブジェクトを返す関数をdefine()に渡します。
define(function () {
    var date = new Date();

    return {
        date: date,
        title: 'Hello'
    };
});