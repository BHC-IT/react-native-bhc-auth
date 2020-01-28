const bhcAuth = require('./src/bhcAuthWrapper').default;
const Query = require('./src/query').default;
const User = require('./src/user').default;
const {getUri, setUri, getQuery, setQuery} = require('./src/queryHold');
const XMLHttpRequestAsync = require('./src/httpWrapper').default;


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUri = getUri;
exports.setUri = setUri;
exports.getQuery = getQuery;
exports.setQuery = setQuery;
exports.Query = Query;
exports.User = User;
exports.XMLHttpRequestAsync = XMLHttpRequestAsync;
exports.default = bhcAuth;
exports.bhcAuth = bhcAuth;
