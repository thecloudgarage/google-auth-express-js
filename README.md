# google-auth-express-js
* To get the Credentials for Google APIs visit https://console.developers.google.com/apis
* Create a new project
* Search for an API named Identity Toolkit API
* Enable it
* Create Credentials from left hand menu of the type OAuth Client ID
* Application Type = Web Application
* Give an easy name
* Assuming you will have a DNS name for your website app, enter the same as http://your-website-domain:port-number-of-web-app in Javascript Authorized origins
* In the Authorized redirect URI insert http://your-website-domain:port-number-of-web-app/google/auth/callback (In our app, this is call back route that we manually create after successful authentication)
* Next, on the left hand menu, you will see OAuth Consent screen
* Give it a simple name
* A support email
* And most importantly, the following scopes should be included "email", "profile", "openid". If these are not included, you can manually add them
* Add authorized domains (this could be your root domain or the website domain)
* Next Install NodeJS on a Ubuntu Server
* Clone the Git repo
* The Node modules are already present in the repo. However, if you want to update them, change the package versions in the package.json. Run npm install
* Run node index.js
* Open your website url with its FQDN, e.g. in this case the app is is running on port 5000 (change it if you like)
* http://website-url-fqdn:5000
* You will see a redirect to Google authentication and upon authorizing, you will be redirected to a static page displaying Logged in
* At the same time, you will see the User's email address printed on your console log
