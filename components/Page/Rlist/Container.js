import React from 'react'
import Searchbox from './Searchbox'
import Carousel from './Carousel'
import List from './List.js'

var Store = require('../../../Store/RlistStore');
//得到餐厅列表页的数据模型

export default React.createClass({
  getInitialState(){
    return {
      list: [],
      slides: []
    }
  },
  changeList:function(){
      Store.loadmoreList(this);
  },
  componentDidMount: function(){
      var geohash = this.props.params.geohash;
      Store.getListData(geohash, this);//得到商家列表

      Store.getSlideList(geohash, this); //得到轮播图列表

  },
  render() {
  	console.log(this.props.params.geohash);
  	console.log(this.state.list);
    var geohash = this.props.params.geohash;
    return (
    	<div>
    		<h1>商家列表页</h1>
    		<Searchbox geohash={geohash}></Searchbox>
    		<Carousel data={this.state.slides}/>
    		<List onloadmore={this.changeList} data={this.state.list}></List>
    	</div>
    )
  }
})