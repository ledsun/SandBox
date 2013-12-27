'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var UserSchema = new Schema({
  name: String
});

mongoose.model('User', UserSchema);