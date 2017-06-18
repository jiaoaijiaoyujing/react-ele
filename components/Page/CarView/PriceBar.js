import React from 'react'
var pubsub = require('../../../pubsub.js');
var CarListStore = require('../../../Store/CarListStore');
export default React.createClass({
  getInitialState(){
  	return {
  		price: CarListStore.getPrice()
  	}
  },
 /* updateView(data){
  	this.setState({
  		price: data
  	})
  },*/
  componentDidMount(){
	  var dom = this.refs.footer;
	  var offsetTop = dom.offsetTop - 41;
	  this.props.onChangeHeight(offsetTop);
	 // pubsub.subscribe('renderPricebar', this.updateView)
  },
  toggle() {
  	console.log('..........');
  	this.props.onToggle();
  },
  render() {
  	
    return (
    	<div ref="footer" className="shopcar" onClick={this.toggle}>
				<div className="shopcar-wrap">
					<div className="shopcar-bg">
						<span className="car" ></span>
						<span className="carhuiimg"></span>
						<span className="carlanimg"></span>
						<span className="carnum">1</span>
						<div className="information">
							<div className="carstatements"><span>￥</span><span className="carprice">{this.state.price}</span></div>
							<p className="cardeliver">再买￥<span className="deliver">0</span>免配送费</p>
						</div>
						<a href="javascript:;" className="settlement">去结算</a>
					</div>
				</div>
		</div>
    )
  }
})