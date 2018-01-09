# Salesforce OAuth 2.0 JWT Bearer Token Flow Implementation
[Salesforce OAuth 2.0 JWT Bearer Token Flow](https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&type=5)

## Installation
```bash
$ npm install salesforce-jwt-bearer-token-flow --save
```

## Salesforce Configuration

### Step 1 : The certificate
Create the private key and the certificate in osx terminal:
```bash
$ openssl req  -nodes -new -x509  -keyout private.pem -out server.cert
```

### Step 2 : The connected App
Create a connected app in Salesforce:

1. Select **Enable OAuth Settings**
2. Select **Use digital signatures**
3. Upload the generated **certificate**

![create the connected app in Salesforce](https://lh6.googleusercontent.com/qySXu8HlX3SAavwS_e9si6Ckz5qYUEROF6iOzZpPalrAM7mszi8fjCm1HgI4MhXz_jpp0ZlJ6YIaokbqgtOL=w3360-h1952-rw)

## Usage

### Input
```javascript
const   fs = require('fs')
    ,   privateKey = fs.readFileSync('private.pem').toString('utf8')
    ,   jwt = require("salesforce-jwt-bearer-token-flow")
;

var token = jwt.getToken(
	"<YOUR_CONNECTED_APP_CLIENT_ID>",
	"<YOUR_SALESFORCE_USERNAME>",
	"<ISSUER>",
	privateKey,
	function(err, token){
	console.log(token)
})
```
### Output

```javascript
{
    access_token: 'xxxxxxxxxx!ARYAQNzk4LCbHsX[...]',
    scope: 'id full',
    instance_url: 'https://eu6.salesforce.com',
    id: 'https://login.salesforce.com/id/xxxxxxxxxxEAI/yyyyyyyyyy',
    token_type: 'Bearer'
}
```

## License

MIT