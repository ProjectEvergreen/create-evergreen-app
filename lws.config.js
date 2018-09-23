// configuration file for local-web-server CLI, used in yarn serve
module.exports = {

  directory: 'public',

  spa: 'index.html',

  compress: true,

  open: true,

  rewrite: [{
    from: '/some-api/*',
    to: 'http://your-domain.com/some-api/$1'
  }]

};