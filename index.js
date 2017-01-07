var request = require('request');

// permit self-signed SSL certificate
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
// enable cookie
request = request.defaults({jar: true});

var login_url = process.env.AIPO_URL + '/portal'
var ical_url = process.env.AIPO_URL + '/ical/calendar.ics'
var login_name = process.env.AIPO_USERNAME
var login_password = process.env.AIPO_PASSWORD

// define options for login
var options = {
  uri: login_url,
  headers: {
   'Content-type': 'application/x-www-form-urlencoded',
   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML,  like Gecko) Chrome/44.0.2403.130 Safari/537.36'
  },
  form: {
    'action': 'ALJLoginUser',
    'org': 'org001',
    'username': login_name,
    'member_username': login_name,
    'password': login_password
  }
}

// end point
exports.handler = (event, context, callback) => {
  // get login page
  request.get(login_url, function () {
    // post auth options
    request.post(options, function () {
      // get ical data
      request.get(ical_url, function(error, res, body) {
        callback(null, body);
      });
    });
  });
};
