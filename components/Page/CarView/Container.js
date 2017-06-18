import React from 'react'
import Header from './Header'
import Navlist from './Navlist'
import Foodlist from './Foodlist'
import Carlist from './CarList'
import PriceBar from './PriceBar'

var pubsub = require('../../../pubsub.js');
var CarListStore = require('~/Store/CarListStore');

export default React.createClass({
  getInitialState(){
  	return {
  		height: 200,
      carData: {
         data: [], //商家中所有的食物数组
         list: []  //所有的添加在购物车里面的食物
      },
      flag: false,
      itemlist: []
  	}
  },
  changeHeight(height) {
  	this.setState({
  		height: height
  	})
  },
  updateView(obj){
    var arr = [];
    for(var key in obj.list) {
      arr.push(obj.list[key])
    };
    this.setState({
      carData: {
         data: obj.data,
         list: arr
      },
      toggleList: false,
      flag: !this.state.flag
    })
  },
  toggleList() {
    this.setState({
      toggleList: !this.state.toggleList
    })
  },
  componentDidMount(){
    //组件渲染结束
    var id = this.props.params.id;
    pubsub.subscribe('renderCarlist', this.updateView)
    CarListStore.getCarData(id, this)
  },
  render() {
    return (
    	<div id="detail" className="section">
	    	<div className="detail-wrap">
	    		<Header></Header>
    			<div className="foods-content">
    				<Navlist height={this.state.height} data={this.state.carData.data}></Navlist>
    				<Foodlist toggle={this.state.flag} height={this.state.height} data={this.state.carData.data}></Foodlist>
    			</div>
    		</div>
			<Carlist onToggle={this.toggleList} data={this.state.carData.list} toggle={this.state.toggleList}></Carlist>
			<PriceBar onToggle={this.toggleList} onChangeHeight={this.changeHeight}></PriceBar>
    	</div>

    )
  }
})