var list = [];

var Inputtext = "";
var pubsub = require('../pubsub.js'); //引入发布订阅模块

var Store = {
	getText:function(){
		return Inputtext;		 	
	},
	getData: function(text, me, flag) {
		//得到数据
		//利用Ajax 获取数据
		if(list.length > 0 && flag) {
			me.setState({
				list: list
			})
			return;
		}
		
		if(list.length === 0 && flag) {
			return;
		}

		var url = '/v1/pois?city_id=3&keyword='+ text + '&type=search';
		fetch(url, {
			method: 'GET'
		}).then(function(response) {
			response.json().then(function(data) {
				console.log('接收到的数据', data);
				if(data instanceof Array) {
					Inputtext = me.state.text; //得到搜索框里的内容
					list = data;
					//改变初始化的状态，页面会自动的刷新
					me.setState({
						list: data
					});
				}
				
			});
		}).catch(function(e) {
			console.log("Oops, error");
		});
	}
}
module.exports = Store;