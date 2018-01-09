# Salesforce OAuth 2.0 JWT Bearer Token Flow Implementation

## Example

```javascript

const   fs = require('fs')
	,   privateKey = fs.readFileSync('private.pem').toString('utf8')
	,	jwt = require("salesforce-jwt-bearer-token-flow")
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