/**
 * Created by maximedenoun on 2017-06-14.
 */
console.log('my bot');
let Twit = require('twit');
var json2csv = require('json2csv');
var fs = require('fs');
let credentials = require('./credentials');
let T = new Twit({
 consumer_key:         credentials.twitter.consumer_key,
 consumer_secret:      credentials.twitter.consumer_secret,
 access_token:         credentials.twitter.access_token,
 access_token_secret:  credentials.twitter.access_token_secret,
 timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

let today = new Date, yesterday = new Date();
let todayQueryParam = today.toISOString();//.slice(0, 10);
yesterday.setTime(yesterday.getTime() - (24 * 3600 * 1000));
let yesterdayQueryParam = yesterday.toISOString();//.slice(0, 10);

console.log(todayQueryParam);
console.log(yesterdayQueryParam);

let params = {
 q: 'rbnb',
 since: yesterdayQueryParam/*,
 until: todayQueryParam*/
};

T.get('search/tweets', params, processData);


function extractMainInfo(twits) {
 let extractedData = twits.statuses.map(value => {
  return {
   id: value.id,
   createdAt: value.created_at,
   text: value.text,
   user: value.user.screen_name,
   location: value.user.location,
   userImg: value.user.profile_image_url
  }
 });
 return extractedData;
}
function processData(err, data, response) {
 console.log(data);
 let tweets = extractMainInfo(data);
 let fields = ['id', 'createdAt', 'text', 'user', 'location', 'userImg'];
 try {
  var csv = json2csv({ data: tweets, fields: fields });
  fs.writeFile('tweet.csv', csv, function(err) {
   if (err) throw err;
   console.log('file saved');
  });
 } catch (err) {
  console.error(err);
 }
}