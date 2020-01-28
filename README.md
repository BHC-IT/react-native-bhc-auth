# install

```bash
npm i -s @bhc/bhcauthsdk
```

# import

```js
// in es6
import bhcAuth, {getUri, getQuery, Query, User, XMLHttpRequestAsync} from '@bhc/bhcauthsdk'

// in node
require = require("@std/esm")(module) // or use --experimental-modules flag
const bhcAuth = require('@bhc/bhcauthsdk').default
```

# usage
## create a user
```js
let auth = new bhcAuth(client_id, client_secret);

auth.createUser(user_login, user_password).then(user => {
});
```

## login
```js
let auth = new bhcAuth(client_id, client_secret);

auth.login(user_login, user_password).then(user => {
	console.log(user.getInfoUser());
});
```

# bhcAuth
## methods
```js
constructor(client_ID, client_secret)
async createUser(username, password) //create a new user
async login(username, password) // login a user. return a User object
async refresh(refresh_token) // use a refresh_token to log a user
async verify(access_token) // verify the authenticity of a a token
verifyProvidedSource(access_token) // verify if the token was provided by you. A valid token may be provided by someone else, use this to ensure the token doesnt come from unexpected source.
getInfoFromToken(access_token) // return the info loaded in the token
```

# user
## methods
```js
constructor(obj)
getAccessToken() // return the user access token
getInfoUser() // return the user info
getRefreshToken() // return the user refresh token
async refreshAccessToken() // refresh the access token
async changePassword(old_password, new_password) // change the user password
```