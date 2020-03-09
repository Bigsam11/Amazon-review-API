 const express = require('express');
 const bodyParser = require('body-parser');
 const puppeteer = require('puppeteer');
 
 
 app = express();

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: false }))


 app.get('/webscrape',  async function(req, res) {
  
  let amazonUrl = req.body.amaUrl;
  
    console.dir("body of amazonUrl::::::::::" + amazonUrl)

    console.dir("body of bookingUrl::::::::::" + amazonUrl)
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(amazonUrl);
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
    res.send(hotelData)
    console.dir(hotelData);
    return hotelData;
});
























//  app.post('/sms', function (req, res) {
//   const body = req.body.Body
//   //console.dir('this is the body:::',body)
//  // let bookingUrl = 'https://www.amazon.com/dp/B07DHY5R34/ref=sspa_dk_detail_3?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU1VEVzlUOUYxRTczJmVuY3J5cHRlZElkPUEwNTQ4ODE2U1FQRkE4QkdEUzhRJmVuY3J5cHRlZEFkSWQ9QTAxMDI1NTRZOExERlUzOTZZWkkmd2lkZ2V0TmFtZT1zcF9kZXRhaWwyJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==';
//  (async () => {
//      const browser = await puppeteer.launch({ headless: true });
//      const page = await browser.newPage();
//      await page.setViewport({ width: 1920, height: 926 });
//      await page.goto(body);
 
//      // get hotel details
//      let hotelData = await page.evaluate(() => {
//          let hotels = [];
//          // get the hotel elements
//          let hotelsElms = document.querySelectorAll('div.aok-relative');
//          // get the hotel data
//          hotelsElms.forEach((hotelelement) => {
//              let hotelJson = {};
//              try {
//                  hotelJson.name = hotelelement.querySelector('span.a-profile-name').innerText;
//                  hotelJson.reviews = hotelelement.querySelector('div.review-text-content').innerText;
//                  hotelJson.rating = hotelelement.querySelector('.review-rating').innerText;
//                  hotelJson.publishedAt = hotelelement.querySelector('span.review-date').innerText;
//              }
//              catch (exception){
 
//              }
//              hotels.push(hotelJson);
//          });
//          return hotels;
//      });
 
//      console.dir( hotelData);
//  })();
  
//   res.set('Content-Type', 'text/plain')
//   res.send(hotelData)
// })


 port = process.env.PORT || 4000;
 app.listen(port,()=>console.log('Listening to server on port', port))

 

 