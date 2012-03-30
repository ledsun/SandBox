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
    <div id="result">
    </div>
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
                        $('#result').html('成功しました。' + msg.d)
                    },
                    error: function (msg) {
                        $('#result').html('エラーが発生しました。' + msg.status)
                    }
                });
            });
        });</script>
</body>
</html>
