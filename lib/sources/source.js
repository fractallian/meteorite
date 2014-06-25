var GitSource = require('./git');
var LocalSource = require('./local');
var fs = require('fs');


Source = {
  prepare: function(root, config) {
    var klass;
    
    if (config.path)
      klass = LocalSource;
    else
      klass = GitSource;
    
    return new klass(root, config);
  }
};

module.exports = Source;
