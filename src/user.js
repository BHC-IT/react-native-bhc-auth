const bhcAuth = require('./bhcAuthWrapper').default;

const {getUri, setUri, getQuery, setQuery} = require('./queryHold');

const jwt = require('jwt-decode');

exports.default = class User {
	constructor(obj){
		this.items = {};
		this.infoUser = null;
		Object.keys(obj).forEach((key) => {
			this.items[key] = obj[key];
		});
	}

	getAccessToken(){
		return this.items.access_token
	}

	getInfoUser(){
		if (this.infoUser === null)
			this.infoUser = jwt(this.items.access_token, "" /*, true*/)
		return this.infoUser;
	}

	getRefreshToken(){
		return this.items.refresh_token;
	}

	async refreshAccessToken(){
		let refTokenInfo = jwt(this.items.access_token, null /*, true*/);
		const tmp = await new bhcAuth(refTokenInfo.clientId, null).refresh(this.getRefreshToken());
		this.items = tmp.items;
		return this.getRefreshToken();
	}

	async changePassword(old_password, new_password){
		try {
			let res = await getQuery().query("/info/changePassword", "post", {'Content-Type':'application/x-www-form-urlencoded', Authorization:`Bearer ${this.getAccessToken()}`}, {
				oldPassword:old_password,
				password:new_password,
			});
			res = JSON.parse(res);
			return (res);
		} catch (e) {
			throw e;
		}
	}
}
