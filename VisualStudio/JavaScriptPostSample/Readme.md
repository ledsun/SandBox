# JavaScriptでASP.NETのポストバックイベントを起こすサンプル

runat="server"を持つAタグは、onserverclick属性にサーバサイドで呼び出すメソッドを指定できます。
onclickイベントが真の場合にpostするので、常に真を返すonclick="return true"を設定します。
```html
<a id="postbackAnchor" runat="server" onclick="return true" onserverclick="javascriptPosted"></a>
```

javaScriptで「Aタグのclickイベント」を起こすとサーバサイドのメソッドを呼べます。
```javascript
window.document.getElementById('postbackAnchor').click();
```

元ネタは http://www.codeproject.com/Articles/30412/Pop-up-Window-Calling-Parent-Window-s-Server-side
