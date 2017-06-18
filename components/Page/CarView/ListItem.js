import React from 'react'
var CarListStore = require('../../../Store/CarListStore');
export default React.createClass({
  getInitialState(){
    return {
      
    }
  },
  plus(){
      var num = this.props.item.num;
      num++;
      var item = this.props.item;
      CarListStore.plus(this.props.item.parentIndex, this.props.item.childIndex, num, item);
  },
  render() {
    var flag = this.props.item.num === 0 ? 'none' : 'inline-block';

    return (
    	<div className="carmessage-bot" data-foodid="532808569">
    		<h3>{this.props.item.name}</h3>
    		<div className="carmesbot-right">
    			<b className="fuhao">￥</b>
    			<span className="price">{this.props.item.specfoods[0].price}</span>
    			<span className="num-area">
	    			<span className="minus" style={{display: flag}}>-</span>
	    			<span className="num" style={{display: flag}}>{this.props.item.num}</span>
	    			<span className="plus" onClick={this.plus}>+</span>
    			</span>
    		</div>
    	</div>
    )
  }
})