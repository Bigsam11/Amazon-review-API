 const express = require('express');
 const bodyParser = require('body-parser');
 const puppeteer = require('puppeteer');
 const cors = require('cors')
 
 
 app = express();
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: false }))

 app.use(cors())
 

 app.post('/webscrape',  function(req, res) {
  
    let amazonUrl = req.body.amaUrl;
  
    
    (async () => {
    console.dir("body of bookingUrl::::::::::" + amazonUrl)
//     const browser = await puppeteer.launch({
//         'args' : [
//           '--no-sandbox',
//           '--disable-setuid-sandbox'
//         ]
//       });
    const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://chrome.browserless.io/'
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(amazonUrl);
    await page.waitFor(40000);
    console.dir("AmazonUrl::::::::::" + amazonUrl)
       
    // get hotel details
    let reviewData = await page.evaluate(() => {
        let reviews = [];
        // get the hotel elements
        let reviewElms = document.querySelectorAll('div.aok-relative');
        // get the hotel data
        console.dir("hotelsElms::::::::::" + reviewElms)
        reviewElms.forEach((reviewelement) => {
            let reviewJson = {};
            try {
              reviewJson.name = reviewelement.querySelector('span.a-profile-name').innerText;
              reviewJson.reviews = reviewelement.querySelector('div.review-text-content').innerText;
              reviewJson.rating = reviewelement.querySelector('.review-rating').innerText;
              reviewJson.publishedAt = reviewelement.querySelector('span.review-date').innerText;
            }
            catch (exception){

            }
            reviews.push(reviewJson);
        });
        return reviews;
    });
    //res.send(hotelData)
    //res.send(hotelData)
    console.dir(reviewData);
    res.status(201).json(reviewData);

    
})();

});

 port = process.env.PORT || 2000;
 app.listen(port,()=>console.log('Listening to server on port', port))

 

 
