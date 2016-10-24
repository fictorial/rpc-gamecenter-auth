A handler for [rpc-over-ws](https://github.com/fictorial/rpc-over-ws) that sets the remote client's human user alias based
on Apple GameCenter credentials.

This contacts Apple to verify the credentials.
See [Apple's documentation](https://developer.apple.com/reference/gamekit/gklocalplayer/1515407-generateidentityverificationsign)

On success, sets `clientId` and `alias` on the `WebSocket`
