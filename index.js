const { google } = require('googleapis');
const express = require('express')
const OAuth2Data = require('./google_key.json')
const jwt_decode = require('jwt-decode')

const app = express()

const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URL = OAuth2Data.web.redirect_uris

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
var authed = false;

app.get('/', (req, res) => {
        if (!authed) {
        // Generate an OAuth URL and redirect there
        const url = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.email'
        });
        console.log(url)
        res.redirect(url);
    } else {
        res.send('Logged in')
    }
})

app.get('/auth/google/callback', function (req, res) {
    const code = req.query.code
    if (code) {
        // Get an access token based on our OAuth code
        oAuth2Client.getToken(code, function (err, tokens) {
            if (err) {
                console.log('Error authenticating')
                console.log(err);
            } else {
                console.log('Successfully authenticated');
                oAuth2Client.setCredentials(tokens);
                var token_id = tokens.id_token;
                var decoded = jwt_decode(token_id);
                console.log(decoded.email);
                authed = true;
                res.redirect('/')
            }
        });
    }
});

const port = process.env.port || 5000
app.listen(port, () => console.log(`Server running at ${port}`));
