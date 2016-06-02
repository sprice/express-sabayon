var express = require('express')
var sabayon = express()

module.exports = function() {

  sabayon.get('/.well-known/acme-challenge/:acmeToken', function(req, res, next) {
    var acmeToken = req.params.acmeToken

    if (process.env.ACME_KEY && process.env.ACME_TOKEN) {
      if (acmeToken === process.env.ACME_TOKEN) {
        return res.send(process.env.ACME_KEY)
      }
    }

    for (var key in process.env) {
      if (key.startsWith('ACME_TOKEN_')) {
        var num = key.split('ACME_TOKEN_')[1]
        if (acmeToken === process.env['ACME_TOKEN_' + num]) {
          return res.send(process.env['ACME_KEY_' + num])
        }
      }
    }

    return res.status(401).send()
  });

  return sabayon
}
