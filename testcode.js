var request = require('request');
var cheerio = require('cheerio');

request('http://www.google.com/', function(err, resp, body) {
        if (err)
                throw err;
        $ = cheerio.load(body);
        console.log(body);
}); - See more at: http://www.devdungeon.com/content/writing-web-scraper-nodejs#sthash.T0U8VNtg.dpuf

