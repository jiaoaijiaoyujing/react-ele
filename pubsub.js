//var pubsub = {};
var pubsub = (function(){
	//myObject ---> pubsub	

	//第一步需要建立事件分发机制的映射关系表
	//事件分发： 把对应的事件分发其应该分发的地方

	//核心对象： 事件分发映射关系管理变量
	var topics = {
		
	}

	var publish = function(topic, args){
		//topic  对应事件的名称
		//args  发布事件时，所要传递的消息 （以数组的方式，期望可以传递多个消息）
		if(!topics[topic]) {
			console.log('事件分发映射管理中，不存在这个事件名称');
			return false;
		}

		var subscribes = topics[topic]; //得到该事件下所有订阅的行为

		var len = subscribes ? subscribes.length : 0;

		while(len--) {
			subscribes[len].func(args)
		}
		return this;
	}

	var subscribe = function(topic, callback){
		//topic 使我们事件的名称
		if(!topics[topic]) {
			topics[topic] = [];
		}

		topics[topic].push({
			func: callback
		})

		console.log(topics);
	}

	return {
		publish: publish,
		subscribe: subscribe
	}
})();

module.exports = pubsub;