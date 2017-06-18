//公用数据模型的操作层
function store(nameSpace, data) {
	// body...
	//我们利用多态的写法

	//存数据
	if(data) {
		localStorage.setItem(nameSpace, JSON.stringify(data))
		return;
	}
	return (nameSpace && JSON.parse(localStorage.getItem(nameSpace))) || null;
}

var commonStore = {
	getHashInfo: function(hash){
		var url = "/v2/pois/" + hash; //该url是通过hash获取经纬度信息的
		var q = fetch(url, {
			method: 'GET'
		}).then(function(response){
			return response.json()
		}).catch(function(e) {
			console.log("Oops, error");
			alert("后段错误，不要找前端")
		});
		return q;	 	
	},
	getHashLoc: function(){
		var loc = Store(hash); //loc取得缓存中的经纬度
		return loc;		 	
	},
	setHashCache: function(hash, data){
		store('geohash', hash);
		store(hash, {
			lat: data.latitude,
			lng: data.longitude
		}) 	
	}
}
module.exports= commonStore;