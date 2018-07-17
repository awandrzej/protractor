describe('angularjs homepage todo list', function() {
    
    var fs = require('fs');
 
    // abstract writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
    
    it('take a screenshot from KLM', function() {
      
    browser.get('https://angularjs.org?'+(browser.params.klm.master));
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'exception.png');
        });
    });
  });