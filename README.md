# Comment-and-Review-Downloader

This is a Dynamic api for getting reviews and information about such reviews. 

use the Sample url below once the application has been cloned and installed in the machine and 'npm i'  has been ran in the project path.


https://www.amazon.com/Andalou-Naturals-Fortifying-Conditioner-CannaCell/dp/B07D39K85G/ref=pd_day0_c_194_5/139-0351406-8458945?_encoding=UTF8&pd_rd_i=B07D39K85G&pd_rd_r=09b7a153-ecbe-4c55-ba69-bc79b6f2470c&pd_rd_w=Ufl2x&pd_rd_wg=FBXQp&pf_rd_p=47a9d55c-4dbb-48fe-a136-8e1abc72e8e6&pf_rd_r=4E91JD20CQF1H5T0NF2K&psc=1&refRID=4E91JD20CQF1H5T0NF2K


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

