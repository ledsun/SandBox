# mqtt.jsを試す

node.jsのnetモジュールに依存していて、WebSocket非対応。
コミットを見るに対応中かも

## brockerにapolloを使う場合

```
brew cask install java
export JAVA_HOME=$(/usr/libexec/java_home)
brew install apollo
/usr/local/Cellar/apollo/1.7/bin/apollo create /usr/local/var/apollo
"/usr/local/var/apollo/bin/apollo-broker" run
```

```
npm install mqtt
node subscriber.js
node publisher.js
```

- 複数のターミナルを使います。

参考：[Apache Apollo と Node.js で MQTT を試してみる - Null.ly](http://null.ly/post/56517703680/apache-apollo-node-js-mqtt)

## brockerにmqtt.jsを使う場合

サーバーが実装されてない。
簡易brockerを使う。

```
node broadcast.js
node subscriber.js
node publisher.js
```
