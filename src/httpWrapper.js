exports.default =  class XMLHttpRequestAsync {
	constructor(){
		this.xml = new XMLHttpRequest();
		this.onLoadSet = false;
	}

	open(method, url){
		this.xml.open(method, url, true);
	}

	setRequestHeader(key, header){
		this.xml.setRequestHeader(key, header);
	}

	send(body){
		let prom = new Promise((resolve, reject) => {
			if (!this.onLoadSet)
				this.onload(function(){
					if (this.status > 300)
						reject({status:this.status, ...(JSON.parse(this.response))})
					else
						resolve(this.response ? this.response : this.responseText);
				});
			this.xml.send(body);
		});
		return (prom);
	}

	onload(callback){
		this.xml.onload = callback;
		this.onLoadSet = true;
	}
}