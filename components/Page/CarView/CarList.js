import React from 'react'
import ListItem from './ListItem'

export default React.createClass({
  getInitialState(){
    return {
      carList: []
    }
  },
  remove() {
    this.props.onToggle();
  },
  render() {
  	var flag = this.props.toggle ? 'block':'none';
    return (
    	<div className="carmessage" style={{display:flag}}>
    		<div className="cart-layer" onClick={this.remove}></div>
    		<div className="carmessage-wrap">
    			<div className="carmessage-top">
    				<div className="carme-left"><span></span>购物车</div>
    				<div className="carme-right"><span className="rabish"></span>清空</div>
    			</div>
    			<div className="carmessage-list">
             {
                this.props.data.map(function(value, key){
                      return <ListItem key={key} item={value}></ListItem>
                })
             }
    			</div>
    		</div>
    	</div>
    )
  }
})