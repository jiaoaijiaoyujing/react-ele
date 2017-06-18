//餐厅列表页数据模型
var CommonStore = require('./CommonStore');
var slideList = [];//轮播图列表

var list = []; //餐厅列表
var offset = 0;
var lat;
var lng;
var listPromise; // 得到Ajax实例，在任意位置进行调用
var RlistStore = {
	getSlideList: function(hash, context){
		var url = "/v2/index_entry?geohash="+ hash +"&group_type=1&flags[]=F";
		fetch(url).then(function(response){
			response.json().then(function(data){
				//改变轮播图的数据

				//动态的加载的轮播图 怎么才能轮播
				context.setState({
					slides: data
				})	 	
			})	 	
		})
	},
	loadmoreList: function(context){
		if(!lat || !lng) {
			return;
		}
		this.sendListData().then(function(data){
			var arr = context.state.list;
			list = list.concat(arr);
			context.setState({
				list: arr.concat(data) //拼接数组
			})
		}) 	
	},
	getHashInfo: function(hash){
		var url = "/v2/pois/" + hash;
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
	/*this.getHashInfo().then(function(data){
		console.log('数据请求成功了');	 	
	})*/
	sendListData: function(){
		var url = '/shopping/restaurants?latitude='+ lat +'&longitude='+ lng +'&offset='+ offset +'&limit=20&extras[]=activities&terminal=h5';
		var t = fetch(url, {
			method: 'GET'
		}).then(function(response) {
			offset += 20;
			return response.json();
		}).catch(function(e) {
			console.log("Oops, error");
			alert("后段错误，不要找前端")
		});
		return t;
	},
	getListData:function(hash, context){
		//获取数据
		var me = this;
		if(list.length > 0) {
			//进行数据的缓存
			context.setState({
				list: list
			});
			return;
		}
		CommonStore.getHashInfo(hash).then(function(data){
			CommonStore.setHashCache(hash, data);
			lat = data.latitude;
			lng = data.longitude; //获取经度，纬度的信息
			me.sendListData().then(function(data){
				console.log('拿到对应的列表信息的数据', data);
				//改变组件的状态
				list = data;
				context.setState({
					list: data
				})
			});
		}); 	
	}
}
module.exports = RlistStore;