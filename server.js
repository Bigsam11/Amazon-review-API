 const express = require('express');
 const bodyParser = require('body-parser');
 const puppeteer = require('puppeteer');
 
 
 app = express();

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: false }))


 app.post('/webscrape',  function(req, res) {
  
    let amazonUrl = req.body.amaUrl;
  
    
    (async () => {
    console.dir("body of bookingUrl::::::::::" + amazonUrl)
    const browser = await puppeteer.launch({
        'args' : [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(amazonUrl);
    await page.waitFor(3000);
    console.dir("AmazonUrl::::::::::" + amazonUrl)
       
    // get hotel details
    let hotelData = await page.evaluate(() => {
        let hotels = [];
        // get the hotel elements
        let hotelsElms = document.querySelectorAll('div.aok-relative');
        // get the hotel data
        console.dir("hotelsElms::::::::::" + hotelsElms)
        hotelsElms.forEach((hotelelement) => {
            let hotelJson = {};
            try {
                hotelJson.name = hotelelement.querySelector('span.a-profile-name').innerText;
                hotelJson.reviews = hotelelement.querySelector('div.review-text-content').innerText;
                hotelJson.rating = hotelelement.querySelector('.review-rating').innerText;
                hotelJson.publishedAt = hotelelement.querySelector('span.review-date').innerText;
            }
            catch (exception){

            }
            hotels.push(hotelJson);
        });
        return hotels;
    });
    //res.send(hotelData)
    res.send(hotelData)

    console.dir(hotelData);
})();

});

 port = process.env.PORT || 2000;
 app.listen(port,()=>console.log('Listening to server on port', port))

 

 
