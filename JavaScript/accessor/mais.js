var person1 = {
  _name: 'Nicholas',
  get name() {
    return this._name
  }
}

console.log(person1.name)

var person2 = {
  _name: 'Jack'
}

Object.defineProperty(person2, 'name', {
  get: function() {
    return this._name
  }
})

console.log(person2.name)

var person3 = {};

Object.defineProperties(person3, {
  _name: {
    value: 'Bower',
    enumerable: true,
    configurable: true,
    writable: true
  },
  name: {
    get: function() {
      return this._name
    }
  }
})

console.log(person3.name)
