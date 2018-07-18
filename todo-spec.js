describe('angularjs homepage todo list', function() {
    
    var fs = require('fs');
       
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
    
    it('take a screenshot from KLM', function() {
      
    browser.get(browser.params.carrier.url+browser.params.carrier.master);
      
    element(by.id('set_notification')).getLocation(); 
    element(by.css('footer > div:nth-child(2) > hr')).getLocation().then(function (location) {
        var height = location.y; 
        console.log('element size:'+height); 
        browser.driver.manage().window().setSize(800, height);
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception.png');
            });
        
    });
    });
  });