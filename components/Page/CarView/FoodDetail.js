import React from 'react'
import FoodItem from './FoodItem'

import FoodDetail from './FoodDetail'

import equal from 'deep-equal'

var CarListStore = require('~/Store/CarListStore');

var count= 0;
export default React.createClass({
  /*getInitialState(){
    return {
      num: this.props.num
    }
  },*/
  shouldComponentUpdate(nextProps) {
      /*console.log(this.props.item.num, nextProps.item.num, !(this.props.num === nextProps.num));
      */
      //return true;
      return !(this.props.num === nextProps.num)
  },
  render() {
  	console.log('detail--update');
  	var imgpath = "//fuss10.elemecdn.com/c/04/f13c2078accd517b6eb16360deaf1jpeg.jpeg?imageMogr/thumbnail/140x140/format/webp/quality/85"
  	if(this.props.item.image_path) {
	  	var a = this.props.item.image_path.charAt(0);
  		var b = this.props.item.image_path.substring(1,3);
  		var c = this.props.item.image_path.slice(3);
  		var d = this.props.item.image_path.slice(32);
  		imgpath = 'http://fuss10.elemecdn.com/'+ a+ '/' + b + '/' + c + '.' + d + '?imageMogr/thumbnail/140x140/format/webp/quality/85';
  	}
  	var flag = this.props.item.num === 0 ? 'none' : 'inline-block';
    return (
    	<div className="food-info" data-foodid="532808569">
				<span className="img-info">
					<img src={imgpath} alt=""/>
				</span>
				<div className="food-detail">
					<h3>{this.props.item.name}</h3>
					<p>{this.props.item.description}</p>
					<p>45评价 月售549份</p>
					<div>
						<b className="fuhao">￥</b>
						<span className="price">{this.props.item.specfoods[0].price}</span>
						<span className="spice">￥69</span>
						<span className="num-area">
						<span className="minus" onClick={this.minus} style={{display: flag}}>-</span>
						<span className="num"  style={{display: flag}}>{this.props.item.num}</span>
						<span className="plus" onClick={this.plus}>+</span>
						</span>
					</div>
				</div>	
		</div>
    )
  },
  minus(){
    var num = this.props.item.num;
    num--;
    this.setState({
      num: num
    });
    var item = this.props.item;
    CarListStore.minus(this.props.parentIndex, this.props.childIndex, num, item);
  },
  plus(){
  	//this.props.item.num++;
    var num = this.props.item.num;
    num++;
    var item = this.props.item;
    CarListStore.plus(this.props.parentIndex, this.props.childIndex, num, item);
  }
})