var GitSource = require('./git');
var LocalSource = require('./local');
var fs = require('fs');


Source = {
  prepare: function(root, config) {
    var klass;

    if (config.path) {
      if (fs.existsSync(config.path))
        klass = LocalSource;
      else
        console.log("Warning: Path '"+config.path+"' for package '"+config.name+"' does not exist.");
    }
    if (!klass)
      klass = GitSource;
    
    return new klass(root, config);
  }
};

module.exports = Source;
