import React from 'react'
import FoodItem from './FoodItem'
import ReactIScroll from 'react-iscroll';

import { Map } from 'immutable';

var iScroll = require('iscroll/build/iscroll-probe')
export default React.createClass({
  getDefaultProps: function() {
     return ({
       options: {
         mouseWheel: true,
         scrollbars: true,
         probeType:2
       }
     })
   },
    onScrollStart: function() {
     console.log("iScroll starts scrolling")
   },
   onScroll(){
     console.log('我正在滚动');
   },
   componentDidUpdate() {
      
   },
   shouldComponentUpdate(nextProps) {
       console.log('-----------listupdate', this.props.data, nextProps.data);
       return true;
   },
   render() {
    var list =  this.props.data.map(function(value, index){
      return <FoodItem pindex={index} data={value} item={value.foods} key={index}></FoodItem>    
    })
    return (
      <div style={{height: this.props.height + 'px'}} className="cont-right">
          <ReactIScroll ref="iscroll" toggle={this.props.toggle} onRefresh={this.Handlerefresh} iScroll={iScroll}
                        onScroll={this.onScroll}
                          options={this.props.options}
                          onScrollStart={this.onScrollStart}>
          		<div className="foodlist">
                	{list}
          		</div>
           </ReactIScroll>
      </div>
    )
  }
})