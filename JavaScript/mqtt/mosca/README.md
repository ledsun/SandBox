# mosca

http://mcollina.github.io/mosca/

JavaScriptのMQTTブローカー

## standalone

```
npm install mosca bunyan -g
mosca --very-verbose -p 61613| bunyan
```

## redis

http://qiita.com/checkpoint/items/58b9b0193c0c46400eeb

```
brew install redis
redis-server /usr/local/etc/redis.conf
npm install mosca  
mosca -c config.js | bunyan
```
