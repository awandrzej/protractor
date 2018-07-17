exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  
  capabilities: {
    browserName: 'chrome',
  
    chromeOptions: {
        //args: ["--disable-gpu", "--window-size=800,6000" ]
        args: [ "--headless", "--disable-gpu", "--window-size=800,6000" ]
      }
    },
  
    params: {
      klm: {
        master: "default"
      }
    }
     

};

