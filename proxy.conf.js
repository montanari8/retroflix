const PROXY_CONFIG = [
    {
        context : ['/api'],
        target: 'https://retroflix.herokuapp.com/',
        secure: true,
        logLevel: 'debug',
        pathRewrite: { '^/api':''} // remover api
    }
];

module.exports = PROXY_CONFIG;