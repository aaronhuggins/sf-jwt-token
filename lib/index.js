const { Base64Url } = require('./base64url')
const { SalesforceJwt } = require('./jwt')

const getToken = async function getToken (options) {
  return await SalesforceJwt.getToken(options)
}

module.exports = {
  getToken,
  Base64Url,
  SalesforceJwt
}
