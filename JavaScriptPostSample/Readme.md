# JavaScriptでASP.NETのポストバックイベントを起こすサンプル

元ネタは http://www.codeproject.com/Articles/30412/Pop-up-Window-Calling-Parent-Window-s-Server-side

runat="server"を持つAタグはonserverclick属性にサーバサイドで呼び出すメソッドを定義できます。
onclickイベントが真の場合postします。常に真を返すようにonclick="return true"を設定ます。
```html
<a id="postbackAnchor" runat="server" onclick="return true" onserverclick="javascriptPosted"></a>
```

javaScriptでAタグのclickイベントを呼び出すとポストし、サーバサイドのメソッドを呼び出すことができます。
```javascript
window.document.getElementById('postbackAnchor').click();
```
