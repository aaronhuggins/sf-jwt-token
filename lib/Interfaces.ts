export interface TokenOptions {
  iss: string
  sub: string
  aud: string
  privateKey: string
}

export interface TokenOutput {
  access_token: string
  scope: string
  instance_url: string
  id: string
  token_type: string
}
