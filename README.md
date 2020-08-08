# Salesforce JWT Token

An implementation of Salesforce OAuth 2.0 JWT bearer token flow, modernized and using promises.

[Salesforce OAuth 2.0 JWT Bearer Token Flow](https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&type=5)

## Installation

```bash
$ npm install sf-jwt-token --save
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

## Usage

```js
const fs = require('fs')
const { getToken } = require('sf-jwt-token')
const privateKey = fs.readFileSync('private.pem').toString('utf8')

async function main () {
  const token = await getToken({
    iss: '<YOUR_CONNECTED_APP_CLIENT_ID>',
    sub: '<YOUR_SALESFORCE_USERNAME>',
    aud: '<YOUR_AUDIENCE>',
    privateKey: privateKey
  })

  console.log(token)
}
```

The audience (aud) must be:

- https://login.salesforce.com,
- https://test.salesforce.com
- https://acme.force.com/customers (where acme.force.com/customers is your community URL)

### Example Output

```js
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
