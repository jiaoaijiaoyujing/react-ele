//餐厅列表页数据模型
var CommonStore = require('./CommonStore');

var slideList = [];//轮播图列表

var list = []; //餐厅列表
var offset = 0;
var lat;
var lng;
var keyword;
var listPromise; // 得到Ajax实例，在任意位置进行调用
var SearchStore = {
	search(context, text){
		offset = 0;
		keyword = text;
		this.sendListData().then(function(data){
			if(data[1]){
				list = data[1].restaurant_with_foods;
			}else {
				list = data[0].restaurant_with_foods;
			}
			list = list.map(function(value){
				return value.restaurant	 	
			}); //过滤我们的数组
			context.setState({
				list: list
			});
		})
	},
	loadmoreList: function(context){
		if(!lat || !lng) {
			return;
		}
		this.sendListData().then(function(data){
			var arr = context.state.list;
			if(!data[1]) {
				//添加class, 改变ul的class
				return;
			}
			if(data[1]){
				list = data[1].restaurant_with_foods;
			}else {
				list = data[0].restaurant_with_foods;
			}
			list = data[1].restaurant_with_foods;
			list = list.map(function(value){
				return value.restaurant	 	
			}); //过滤我们的数组
			list = list.concat(arr);
			context.setState({
				list: arr.concat(data) //拼接数组
			})
		}) 	
	},
	/*this.getHashInfo().then(function(data){
		console.log('数据请求成功了');	 	
	})*/
	sendListData: function(){
		var url = '/shopping/v1/restaurants/search?latitude='+ lat +'&longitude='+ lng +'&keyword=' + keyword + '&offset='+ offset +'&search_item_type=2&limit=20&extras[]=activities';
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
	getListData:function(hash, word, context){
		//获取数据
		var me = this;
		if(list.length > 0 && keyword === word) {
			//进行数据的缓存
			context.setState({
				list: list
			});
			return;
		}
		keyword = word;
		
		CommonStore.getHashInfo(hash).then(function(data){
			CommonStore.setHashCache(hash, data);
			lat = data.latitude;
			lng = data.longitude; //获取经度，纬度的信息
			me.sendListData().then(function(data){
				console.log('拿到对应的列表信息的数据', data);
				//改变组件的状态
				if(data[1]){
					list = data[1].restaurant_with_foods;
				}else {
					list = data[0].restaurant_with_foods;
				}
				list = list.map(function(value){
					return value.restaurant	 	
				}); //过滤我们的数组
				console.log('filter--->', list);
				context.setState({
					list: list
				})
			});
		}); 	
	}
}
module.exports = SearchStore;