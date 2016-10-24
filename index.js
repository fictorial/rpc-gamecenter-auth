const verifier = require('gamecenter-identity-verifier')
const normalizeUserAlias = require('normalize-user-alias')

module.exports = function verifyGameCenterCredentials (args) {
  const alias = _.trim(args.alias || '')
  if (_.isEmpty(alias))
    throw new Error('invalid alias')
  const normalizedAlias = normalizeUserAlias(alias)

  return new Promise((resolve, reject) => {
    verifier.verify(args, error => {
      if (error) {
        reject(error)
      } else {
        this.clientId = normalizedAlias
        this.alias = alias
        resolve({alias})
      }
    })
  })
}
