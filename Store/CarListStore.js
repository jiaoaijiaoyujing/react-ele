
var CommonStore = require('./CommonStore');

var pubsub = require('../pubsub.js');

import { Map,fromJS,List,setIn, getIn, updateIn } from 'immutable';
//导入immutable.js   immutable.map/fromJS/List/setIn

var CarData;

var carList = {
	//购物车列表
}

var idList = {
	
}

var carListStore = {
	/*getCarData:function(hash){
		if(CommonStore.getHashLoc(hash)) {

		}	 	
	},*/
	getCarData: function(id, context){
		var url = "/shopping/v2/menu?restaurant_id=" + id;
		fetch(url).then(function(res){
			res.json().then(function(data){
				data.map(function(value, index){
					value.pflag = 0; //pflag 给每个导航条一个初始化的属性
					//data = ['热销榜 pflag:false', '优惠 pflag:false', '商务套餐 pflag:false', '特色:pflag:false']
					value.foods.map(function(list, index){
						list.num = 0;	 	
					}) 	
				})
				//CarData = fromJS(data) //将服务器中的数据缓存起来
				CarData = data //将服务器中的数据缓存起来
				//更新视图	
				pubsub.publish('renderCarlist', {
					data: CarData,
					list: []
				});
			})	 	
		})
	},
	getPindex: function(id){
		idList[id] = [];
		if(idList[id].length === 0) {
			//优化性能，做缓存上的处理
			CarData.forEach(function(value, index){
				value.get('foods').forEach(function(val, cindex){
					if(val.get('item_id') === id) {
						idList[id].push([index, 'foods', cindex, 'num']);
					} 	
				})
			});
		}
		return idList[id];
	},
	minus: function(pindex, cindex, num, item){
		item.num--;
		CarData[pindex].foods[cindex].num = num;

		if(item.num === 0) {
			delete carList[item.id];
		}
		//更新价格	
		pubsub.publish('renderCarlist', CarData);
	},
	plus:function(pindex, cindex, num, item){
		console.log('plus');
		item.num++;
		item.pindex = pindex;
		item.cindex = cindex;
		carList[item.item_id] = item;
		//CarData[pindex].foods[cindex].num = num;

		//CarData[pindex].pflag = !CarData[pindex].pflag
		//性能优化？？shouldComponentupdate


		//进行这样的赋值，可能会导致一些难以想象bug

		//var t = carList.fromJS()
		 CarData = fromJS(CarData)
		 //CarData = CarData.setIn([pindex,'foods', cindex, 'num'], num);
		 //CarData = CarData.setIn([pindex, 'pflag'], !CarData.toJS()[pindex]['pflag'])
		 //CarData 得到的是 Immutable对象
		//console.log('stroe--->', CarData.toJS()[pindex]['pflag']);
		//CarData = CarData.setIn([pindex, 'pflag'], !CarData.toJS()[pindex]['pflag']);
		

		/*CarData.forEach(function(value, index){
		     value.get('foods').find(function(t, count){
		           if(t.get('item_id') === item.item_id) {
		               arr.push([index, 'foods', count, 'num'])
		           }
		     })
		});
		
		arr.map(function(value, index){
			CarData = CarData.setIn(value, num);
			CarData = CarData.setIn([value[0], 'pflag'], !CarData.toJS()[value[0]]['pflag'])	 	
		})*/
		console.log(item.item_id);
		var arr = this.getPindex(item.item_id);
		console.log(arr);
		arr.map(function(value, index){
			var pflag = ++CarData.toJS()[value[0]]['pflag'];
			console.log(pflag);
			CarData = CarData.setIn(value, num);
			CarData = CarData.setIn([value[0], 'pflag'], pflag)
		})
		//更新视图	, 订阅与发布
		pubsub.publish('renderCarlist', {
			data: CarData.toJS(),
			list: carList
		});
	},
	getPrice: function(){
		var sum = 0;
		for(var key in carList) {
			sum +=  carList[key].num * carList[key].specfoods[0].price
		}
		console.log('price is ', sum);
		return sum;
	}
}
module.exports = carListStore;