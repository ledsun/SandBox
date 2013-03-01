//依存するモジュールがある場合はdefineの第一引数に依存モジュール名の配列を指定します。
define(["module/sampleData1"], function (data1) {
    return {
        label: 'color:' + data1.color
    };
});