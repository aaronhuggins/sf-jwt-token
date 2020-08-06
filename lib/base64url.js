class Base64Url {
  static encode (input, encoding = 'utf8') {
    if (Buffer.isBuffer(this.input)) return Base64Url.fromBase64(input.toString('base64'))

    return Base64Url.fromBase64(Buffer.from(input, encoding).toString('base64'))
  }

  static decode (base64url, encoding = 'utf8') {
    return Base64Url.toBuffer(base64url).toString(encoding)
  }

  static toBase64 (base64url) {
    return Base64Url.padBase64(base64url.toString())
      .replace(/-/g, '+')
      .replace(/_/g, '/')
  }

  static fromBase64 (base64 = '') {
    return base64
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }

  static padBase64 (input = '') {
    const SEGMENT_LENGTH = 4
    let padding = ''

    for (let i = input.length % SEGMENT_LENGTH; i < SEGMENT_LENGTH; i += 1) {
      padding += '='
    }

    return input + padding
  }

  static toBuffer (base64url) {
    return Buffer.from(Base64Url.toBase64(base64url), 'base64')
  }
}

module.exports = { Base64Url }
