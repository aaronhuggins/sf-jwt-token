
const   request = require('request')
    ,   base64url = require("base64url")
    ,   crypto = require('crypto')
    ,   sign = crypto.createSign('RSA-SHA256')
;
module.exports.getToken = function (params, cb) {
    var     header = {"alg":"RS256"}
        ,   claimsSet = {
                "iss": params.iss, 
                "sub": params.sub, 
                "aud": params.aud,
                "exp": Math.floor(Date.now() / 1000) + (60 * 5)
            }
        ,   encoded_JWT_Header = base64url(JSON.stringify(header))
        ,   encoded_JWT_Claims_Set = base64url(JSON.stringify(claimsSet))
        ,   existing_string = encoded_JWT_Header+"."+encoded_JWT_Claims_Set
    ;
    sign.update(existing_string);
    sign.end();
    var assertion = existing_string+"."+base64url(sign.sign(params.privateKey));
    request.post(
        params.aud+"/services/oauth2/token",
        { form: {
            "grant_type": 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            "assertion": assertion
        } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                cb(null, JSON.parse(body));
            } else {
                cb(error,null);
                return;
            }
        }
    );
}