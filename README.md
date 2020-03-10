# Comment-and-Review-Downloader

This is a Dynamic api for getting reviews and information about such reviews. 

use the Sample url below once the application has been cloned and installed in the machine and 'npm i'  has been ran in the project path.


https://www.amazon.com/Argan-Treatment-Color-Treated-eSalon/dp/B00SI0MCL4/ref=sr_1_2_a_it?ie=UTF8&qid=1 489250924&sr=8-2&keywords=esalon 
 
https://www.amazon.com/eero-Home-WiFi-System-Pack/dp/B00XEW3YD6/ref=sr_1_1?s=pc&ie=UTF8&qid=148925 0467&sr=1-1&keywords=eero&th=1#customerReviews 

When deploying to Heroku,enter the following code below in the command line to enable Heroku support puppeteer.

$ heroku buildpacks:clear
$ heroku buildpacks:add --index 1 https://github.com/jontewks/puppeteer-heroku-buildpack
$ heroku buildpacks:add --index 1 heroku/nodejs


Then, add the following args to the puppeteer launch function:

const browser = await puppeteer.launch({
  'args' : [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ]
});


Finally, deploy it back to Heroku:

$ git add .
$ git commit -m "Fixing deployment issue"
$ git push heroku master

