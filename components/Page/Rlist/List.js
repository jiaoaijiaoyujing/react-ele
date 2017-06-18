import React from 'react'
import { Link } from 'react-router'
import SingleInfo from '../../Common/SingleInfo'; //单个商品列表组件

var Waypoint = require('react-waypoint');

export default React.createClass({
  
  render() {
    console.log('list---->', this.props.data);
    return (
        	<ul className="list rlist">
             {
              this.props.data.map(function(value, index){
                  return <SingleInfo item={value} key={index}></SingleInfo>
              })
             }
             <Waypoint onEnter={this.scrollHandle}></Waypoint>

        	</ul>
    )
  },
  loadList:function(){
      /*   */
  },
  scrollHandle: function(objEvent){
      console.log('滚动到了底部', objEvent);
      this.props.onloadmore();      
  }
})