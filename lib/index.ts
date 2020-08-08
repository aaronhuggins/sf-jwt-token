import { TokenOptions, TokenOutput } from './Interfaces'
import { SalesforceJwt } from './SalesforceJwt'

export async function getToken (options: TokenOptions): Promise<TokenOutput> {
  return await SalesforceJwt.getToken(options)
}
export { Base64Url } from 'base64url-xplatform'
export { SalesforceJwt } from './SalesforceJwt'
