const bhcAuth = require('./src/bhcAuthWrapper').default;
const {getUri, getQuery} = require('./src/bhcAuthWrapper');
const Query = require('./src/query').default;
const User = require('./src/user').default;
const XMLHttpRequestAsync = require('./src/httpWrapper').default;


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUri = getUri;
exports.getQuery = getQuery;
exports.Query = Query;
exports.User = User;
exports.XMLHttpRequestAsync = XMLHttpRequestAsync;
exports.default = bhcAuth;
exports.bhcAuth = bhcAuth;
