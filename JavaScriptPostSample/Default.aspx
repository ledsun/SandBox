<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JavaScriptPostSample._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>
            JavaScriptでSubmitボタンのクリックイベントを起こすとpostできます。</h1>
        <asp:Label ID="lblMessage" runat="server" /><br />
        <input type="submit" id="submit" value="submit" />
        submitします。<br />
        <input type="button" value="button" />
        ただのボタンはsubmitしません。<br />
        <input type="button" onclick="postback_js();" value="JavaScript" />
        window.document.getElementById('submit').click();<br />
        <input type="button" onclick="postback_jq();" value="jQuery" />
        $('#submit').click();<br />
        <a href=".">開きなおす</a>
        <br />
    </div>
    </form>
    <script type="text/javascript">
        var postback_js = function () {
            window.document.getElementById('submit').click();
        }
        var postback_jq = function () {
            $('#submit').click();
        }
    </script>
</body>
</html>
