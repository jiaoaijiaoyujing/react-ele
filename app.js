//import React from 'react'
import 'whatwg-fetch';
var React = require('react'); 

//import 导入模块
//import { render } from 'react-dom'
var render = require('react-dom').render;
//import App from './modules/App'
import App from './components/App';
import Address from './components/Page/Address/Container.js';
import CarView from './components/Page/CarView/Container.js';
import Rlist from './components/Page/Rlist/Container.js';
import Rsearch from './components/Page/Rsearch/Container.js';


//import { Router, Route, hashHistory } from 'react-router'
var Router = require('react-router').Router; //最外层路由组件，只能写在最外面
var Route = require('react-router').Route; //子路由组件
var hashHistory = require('react-router').hashHistory; //监听hash值的改变
var browserHistory = require('react-router').browserHistory; //监听hash值的改变
var IndexRoute = require('react-router').IndexRoute; //监听hash值的改变

function renders(){
	render((
	  <Router history={browserHistory}>
	  	<Route path="/" component={App}>
	    	<IndexRoute to="/" component={Address}/>
	  		<Route path="/rlist/:geohash" component={Rlist}/>
	  		<Route path="/search/:geohash" component={Rsearch}/>
	  		<Route path="/detail/:geohash/:id" component={CarView}/>
	  	</Route>
	  </Router>
	), document.getElementById('app')); 	
}
renders();

//console.log(_extend({a:1}, {b:'gyf'}));

//render(<App/>, document.getElementById('app'))
