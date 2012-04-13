<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AjaxForWebApplicationSample.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    ボタンを押すと/HelloWorld.svc/Helloを呼び出して文字列を取得します。<br />
    <input type="button" id="button" value="ボタン" />
    <span id="result"></span>
    <hr />
    ボタンを押すと/HelloWorld.svc/Dataを呼び出してDataクラスを取得します。<br />
    <input type="button" id="button1" value="ボタン1" />
    <span id="result1"></span>
    <hr />
    ボタンを押すと/HelloWorld.svc/Datasを呼び出してDataクラスの配列を取得します。<br />
    <input type="button" id="button2" value="ボタン2" />
    <span id="result2"></span>
    <table id="tbl" border="1">
        <tbody>
            <tr>
                <th>
                    名前
                </th>
                <th>
                    値
                </th>
            </tr>
        </tbody>
    </table>
    <hr />
    ボタンを押すと/HelloWorld.svc/Echoを呼び出して入力文字を取得します。<br />
    <input type="button" id="button3" value="ボタン3" />
    <span id="result3"></span>
    </form>
    <script src="/Scripts/jquery-1.7.1.js" type="text/javascript"></script>
    <script type="text/jscript">
        $(document).ready(function () {
            $("#button").click(function (event) {
                $.ajax({
                    type: "POST",
                    url: "/HelloWorld.svc/Hello",
                    data: "{}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        $('#result').html('成功しました。' + msg.d);
                    },
                    error: function (msg) {
                        $('#result').html('エラーが発生しました。' + msg.status);
                    }
                });
            });

            $("#button1").click(function (event) {
                $.ajax({
                    type: "GET",
                    url: "/HelloWorld.svc/Data",
                    success: function (msg) {
                        $('#result1').html('成功しました。' + msg.d.name + msg.d.value);
                    },
                    error: function (msg) {
                        $('#result1').html('エラーが発生しました。' + msg.status);
                    }
                });
            });

            $("#button2").click(function (event) {
                $.ajax({
                    type: "GET",
                    url: "/HelloWorld.svc/Datas",
                    success: function (msg) {
                        var rows = "";
                        for (i = 0; i < msg.d.length; i++) {
                            rows += "<tr>";
                            rows += "<td>" + msg.d[i].name + "</td>";
                            rows += "<td>" + msg.d[i].value + "</td>";
                            rows += "</tr>";
                        }
                        $('#result2').html('成功しました。');
                        $('#tbl').append(rows);
                    },
                    error: function (msg) {
                        $('#result2').html('エラーが発生しました。' + msg.status)
                    }
                });
            });

            $("#button3").click(function (event) {
                $.ajax({
                    type: "GET",
                    url: "/HelloWorld.svc/Echo?str=hoge",
                    success: function (msg) {
                        $('#result3').html('成功しました。' + msg.d);
                    },
                    error: function (msg) {
                        $('#result3').html('エラーが発生しました。' + msg.status)
                    }
                });
            });
        });</script>
</body>
</html>
