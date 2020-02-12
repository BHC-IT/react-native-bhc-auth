const  Query = require('./query').default;
const  User = require('./user').default;
const {getUri, setUri, getQuery, setQuery} = require('./queryHold');
const jwt = require('jwt-decode');

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = class bhcAuth {
	constructor(client_ID, client_secret, stage = "prod"){
		this.client_ID = client_ID;
		this.client_secret = client_secret;
		this.query = new Query(stage === "prod" ? "81.249.225.236:9090" : stage);
		if (getUri() === null)
			setUri(stage === "prod" ? "81.249.225.236:9090" : stage);
		if (getQuery() === null)
			setQuery(this.query)
	}

	async createUser(username, password){
		try {
			let res = await this.query.query("/auth/registerUser", "POST", {'Content-Type':'application/x-www-form-urlencoded'}, {
					username:username,
					password:password,
					client_id:this.client_ID,
					client_secret:this.client_secret
				});
				res = JSON.parse(res);
				return (res);
		} catch (e) {
			throw e;
		}
	}

	async login(username, password){
		try {
			let res = await this.query.query("/auth/login", "POST", {'Content-Type':'application/x-www-form-urlencoded'}, {
				username:username,
				password:password,
				grant_type:'password',
				client_id:this.client_ID,
				client_secret:this.client_secret
			});
			res = JSON.parse(res);
			let user = new User(res);
			return (user);
		} catch (e) {
			throw e;
		}
	}

	async refresh(refresh_token){
		try {
			let res = await this.query.query("/auth/login", "POST", {'Content-Type':'application/x-www-form-urlencoded'}, {
				refresh_token:refresh_token,
				grant_type:'refresh_token',
				client_id:this.client_ID,
				client_secret:this.client_secret
			});
			res = JSON.parse(res);
			let user = new User(res);
			return (user);
		} catch (e) {
			throw e;
		}
	}

	async verify(access_token){
		try {
			let res = await this.query.query("/info/verifyToken", 'GET', {Authorization:`Bearer ${access_token}`});
			res = JSON.parse(res);
			if (res.message === "validated")
				return (true);
			else
				throw ("invalide token");
		} catch (e) {
			throw e;
		}
	}

	verifyProvidedSource(access_token){
		try {
			return jwt(access_token, this.client_secret);
		} catch (e) {
			return (null);
		}
	}

	getInfoFromToken(access_token){
		return jwt(access_token, null /*, true*/);
	}

}
