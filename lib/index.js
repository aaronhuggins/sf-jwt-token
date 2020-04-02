const   request = require('request')
    ,   util = require('util')
    ,   Jwt = require('./jwt')
;
const getToken = function getToken (params, cb) {
    if (typeof cb === 'undefined') return util.promisify(getToken)(params);
    let jwt = new Jwt(params);
    request.post(
        jwt.postUrl,
        { form: {
            "grant_type": 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            "assertion": jwt.token
        } },
        function (error, response, body) {
            if (!error){
                if(response.statusCode === 200) {
                    return cb(null, JSON.parse(body));
                } else {
                    return cb(JSON.parse(body),null);
                }
            } else {
                return cb(error,null);
            }
        }
    );
}
module.exports = { getToken };
