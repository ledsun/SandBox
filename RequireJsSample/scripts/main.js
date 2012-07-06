require(["module/sampleData1", "module/sampleData2", "module/sampleData3", "module/sampleFunction"], function (data1, data2, data3, func) {
    var output = 
        data1.color + '\r' +
        data2.date + '\r' +
        data3.label + '\r' +
        func(1, 2);

    $('#output').text(output);
});
