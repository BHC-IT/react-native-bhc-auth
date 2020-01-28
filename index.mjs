import bhcAuth, {getUri, getQuery} from './src/bhcAuthWrapper'
import Query from './src/query'
import User from './src/user'
import XMLHttpRequestAsync from './src/httpWrapper'

export default bhcAuth

export {getUri as getUri, getQuery as getQuery, Query, User, XMLHttpRequestAsync}
