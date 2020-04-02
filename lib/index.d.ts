declare module 'salesforce-jwt-bearer-token-flow' {
    interface TokenParams {
        iss: string;
        sub: string;
        aud: string;
        privateKey: string;
    }
    interface TokenOutput {
        access_token: string;
        scope: string;
        instance_url: string;
        id: string;
        token_type: string;
    }
    function getToken(params: TokenParams): Promise<TokenOutput>;
    function getToken(params: TokenParams, cb: (error: any, token: TokenOutput) => void);
    export = { getToken };
}
