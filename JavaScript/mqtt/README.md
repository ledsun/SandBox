# apolloを使う場合

```
brew cask install java
export JAVA_HOME=$(/usr/libexec/java_home)
brew install apollo
/usr/local/Cellar/apollo/1.7/bin/apollo create /usr/local/var/apollo
"/usr/local/var/apollo/bin/apollo-broker" run
node subscriber.js
node publisher.js
```

※複数のターミナルを使います。

参考：[Apache Apollo と Node.js で MQTT を試してみる - Null.ly](http://null.ly/post/56517703680/apache-apollo-node-js-mqtt)

# mqtt.jsだけを使う場合

```
node broadcast.js
node subscriber.js
node publisher.js
```
