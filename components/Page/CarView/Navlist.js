import React from 'react'
import ReactIScroll from 'react-iscroll';
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
  render() {
    var me = this;
    return (
      <div style={{height: this.props.height}} className="cont-left">
         <ReactIScroll ref='t' iScroll={iScroll}
                    onScroll={this.onScroll}
                      options={this.props.options}
                      onScrollStart={this.onScrollStart}>
              <ul className="navlist">
              	{
              		this.props.data.map(function(value, index){
              			return <li key={index} className="tit-cont">{value.name} <span style={{color: 'red'}}>{value.pflag}</span></li>	 	
              		})
              	}
              </ul>
         </ReactIScroll>
      </div>
    )
  }
})