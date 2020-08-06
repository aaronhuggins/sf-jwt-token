declare module 'salesforce-jwt-bearer-token-flow' {
  type Encoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'utf16le' | 'base64' | 'binary' | 'hex'

  interface TokenOptions {
    iss: string
    sub: string
    aud: string
    privateKey: string
  }

  interface TokenOutput {
    access_token: string
    scope: string
    instance_url: string
    id: string
    token_type: string
  }

  class Base64Url {
    static encode (input: string | Buffer, encoding: Encoding = 'utf8')
    static decode (base64url: string | Buffer, encoding: Encoding = 'utf8')

    static toBase64 (base64url: string | Buffer): string
    static fromBase64 (base64: string): string
    static padBase64 (input: string): string

    static toBuffer (base64url: string): Buffer
  }

  class SalesforceJwt {
    constructor (options: TokenOptions)

    token: string
    postUrl: string

    getToken (): Promise<TokenOutput>

    static getToken (options: TokenOptions): Promise<TokenOutput>
  }

  function getToken (options: TokenOptions): Promise<TokenOutput>

  export = {
    getToken,
    Base64Url,
    SalesforceJwt
  }
}
