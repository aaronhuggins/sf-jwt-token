# Salesforce OAuth 2.0 JWT Bearer Token Flow Implementation

## Installation
```bash
$ npm install salesforce-jwt-bearer-token-flow --save
```

## Salesforce Configuration
### Step 1 : The certificate
```bash
$ openssl req  -nodes -new -x509  -keyout private.pem -out server.cert
```
### Step 2 : The connected App



## Example
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
	false, // is Sandbox ?
	function(err, token){
	console.log(token)
})
```

## Output
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