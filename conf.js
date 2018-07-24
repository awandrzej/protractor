exports.config = {
  specs: ['todo-spec.js'],

  capabilities: {
    browserName: 'chrome',
  
    chromeOptions: {
        //args: ["--disable-gpu", "--window-size=1024,768" ]
        args: [ "--headless", "--disable-gpu", "--window-size=1024,768" ]
      }
    },
   params: {
       carrier: {
        url: "https://www.afklcargo.com/WW/en/local/app/index.jsp#/tntdetails/", 
        master: "074-15873222"
      }
    }
     

};

