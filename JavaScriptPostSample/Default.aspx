<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JavaScriptPostSample._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <input type="button" onclick="postback();" value="リロード" />
        <a id="postbackAnchor" runat="server" onclick="alert('Aタグのクリックイベントが呼ばれました。');return true"
            onserverclick="javascriptPosted"></a>
        <br />
        <asp:Label ID="lblMessage" runat="server" />
    </div>
    </form>
    <script type="text/javascript">
        var postback = function () {
            window.document.getElementById('postbackAnchor').click();
        }
    </script>
</body>
</html>
