开发饿了么  利用React

核心思想：
1.组件化开发
2.单向数据流

代码架构 Flux（中介者模式）

明确我们的需求

1. 地址搜索页

2. 餐厅列表页

3. 餐厅名称搜索页

4. 购物车详情页

布局方式，采用自定义布局，ionic css框架进行移动端布局


代码的设计？
1.规划我们目录结构

webpack.config.json

app.js --> 入口文件（配置我们的路由）
Flux.js ---> 中介者模式
fetch.js ---> 专门发送Ajax的一个工具
components --> 组件(View)
	Page --> 页面组件
		Address  地址搜索页
			Container.js ---> 容器组件
			header.js --> 头部组件
		Rlist   餐厅列表页  轮播图怎么实现？（待解决）
			Container.js ---> 容器组件
			searchBox.js -->搜索组件
		Rsearch  餐厅名称搜索页
			Container.js ---> 容器组件

		CarView  购物车详情页
			Container.js ---> 容器组件

	Common ---> 公用组件
		SingleInfo   --> 列表页中单个商家展示组件

Store
	AddressStore
	RlistStore
	RsearchStore
	CarViewStore
Action
	AddressAction
	RlistAction
	RsearchAction
	CarViewAction

进行React 项目的环境的搭建

现在开发中 遇到的问题总结：
1. react 开发有很多坑，和之前普通js开发思路不一样，有待适应

2. 对组件的拆分不是很明智，对组件的复用预判性不足

3.react 在功能上，会有很多组件可以被选择，可以下载很多组件辅助我们开发，
如果时间允许，应该自己去尝试开发属于自己的组件

4. 性能的问题，由于代码前期设计的不完善，所以导致
性能的瓶颈， 重新考虑代码的设计
解决思路： 把组件拆分的尽可能的细一些，将组件的状态进行充分的利用


immutable.js    ---> 神器

解决变量与变量之间在赋值的时候，
在保证性能的情况下，保持其独立的特性

var a = 1;
var b = a;
b = 4;
console.log(a); //1
基础数据类型： 互相独立（immutable(不可变)）

var obj = {
	name: 'abc'
}
var t = obj;
t.name = 't';
console.log(obj.name);  //t
引用数据类型：Object  Array 互相引用（mutable（可变性））

var obj = {
	name: 'abc'
}

var t = [];
t.push(obj);

t[0].name = 'wwww';

var other = [].concat(t);  //浅复制

other[0].name = 'tttt';
console.log(t[0].name);  //tttt
//这种情况 是最容易出错的情况， 产生bug最多的情况
//也是在数据处理中，非常非常头疼的情况
function DeepCopy(obj){
	//深复制
	//?非常复杂，不会， 性能及其的低	 	
}
var other = DeepCopy(t);

//有没有其它方法，去改变这个情况？ 
伟大的 immutable.js就可以完美的解决它

//好的技术，一定要靠复杂，好的项目去说明它
//性能不好。。。。没法写代码

npm install

npm start

nginx 数据管理 端口号 666

FLux 架构去写

Redux  React架构思想


一面：js 观察者模式  二面 正则表达式 过了 18k 缘分+运气+专业知识的能力

1 如何判断一个数 是回数？
121 

2 正则表达式
12.1.253.21

// 百度一下 
111.222.233.099
[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]

\d\d\d.\d\d\d.\d\d\d.\d\d\d

\d{3}.\d{3}.\d{3}.\d{3}

(\d{3}){3}.\d{3} 


babel-loader

babel-polyfill --兼容 Promise, Object.assign, 缺点污染全局环境，解决 Babel-runtime-transform 
runtime-transform 

Babel uses very small helpers for common functions such as _extend. By default this will be added to every file that requires it. This duplication is sometimes unnecessary, especially when your application is spread out over multiple files.

This is where the transform-runtime plugin comes in: all of the helpers will reference the module babel-runtime to avoid duplication across your compiled output. The runtime will be compiled into your build.

Another purpose of this transformer is to create a sandboxed environment for your code. If you use babel-polyfill and the built-ins it provides such as Promise, Set and Map, those will pollute the global scope. While this might be ok for an app or a command line tool, it becomes a problem if your code is a library which you intend to publish for others to use or if you can’t exactly control the environment in which your code will run.

The transformer will alias these built-ins to core-js so you can use them seamlessly without having to require the polyfill.

See the technical details section for more information on how this works and the types of transformations that occur.







