import React from 'react'
import FoodItem from './FoodItem'

import FoodDetail from './FoodDetail'

import equal from 'deep-equal'

import { is } from 'immutable';

export default React.createClass({
  shouldComponentUpdate(nextProps) {
  	var thisProps = this.props;
    //该情况下， thisProps, nextProps都同时引用了pflag
    console.log('pflag--->', thisProps.data.pflag, nextProps.data.pflag);
    //
  	if (!is(thisProps.data.pflag, nextProps.data.pflag)) {
  		console.log('检查当前item是否发生了改变');
	    return true;
	  }
	   return false
	//return true;
  	//最难的一个的生命周期，它是控制react项目性能好坏的一个周期
  	//很致命的周期，（逻辑是最复杂的的东西）
  	//控制组件啥时候更新，啥时候不更新？
  },
  render() {
  	console.log('因为有了immutable, 所以它只会更新一次');
  	var me = this;
    return (
		<div className="food-item">
			<h2 data-title="热销榜">热销榜</h2>
				{
					this.props.item.map(function(value, index){
						return <FoodDetail num={value.num} parentIndex={me.props.pindex} childIndex={index} item={value} key={index}></FoodDetail>		 	
					})
				}
		</div>
    )
  }
})