let express = require('express');
let app = express();
let http = require('http').Server(app);



app.use('/vendor', express.static('public/vendor'));
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));
app.use('/assets', express.static('public'));


// ROUTES
require('./routes/index').init(app);

// ALL OTHER ROUTES REDIRECT TO '/'
app.get('*', function (req, res) {
    res.redirect('/');
});



module.exports = http;