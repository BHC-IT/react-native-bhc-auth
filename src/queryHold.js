var uri = null;
var query = null;

function getUri(){
	return uri
}

function setUri(nuri){
	uri = nuri;
	return (uri);
}

function getQuery(){
	return query
}

function setQuery(nquery){
	query = nquery;
	return (query);
}

exports.getUri = getUri;
exports.setUri = setUri;
exports.getQuery = getQuery;
exports.setQuery = setQuery;
