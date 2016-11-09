const verifier = require('gamecenter-identity-verifier')
const normalizeUserAlias = require('normalize-user-alias')
const _  = require('lodash')

/**
 * args = {
 *   publicKeyUrl: str,  // from generateidentityverificationsign
 *   timestamp: int,     // from generateidentityverificationsign
 *   signature: str,     // from generateidentityverificationsign
 *   salt: str,          // from generateidentityverificationsign
 *   playerId: str,      // from GKLocalPlayer.playerId
 *   bundleId: str,      // from your client iOS app
 *   alias: str          // from GKLocalPlayer.displayName
 * }
 */

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
