var unique = require('uniq'),
    events = require('events'),
    _ = require('underscore'),
    mymodule = require('./mymodule');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// console.log(unique(data));
mymodule(unique(data));

var emitter = new events.EventEmitter();

var hoge = _.extend({}, emitter);

hoge.on('test', function(){console.log('called!')})

hoge.emit('test')

for(var prop in emitter){
    console.log('aaa', prop);
}

console.log(emitter)

window._ = _;
