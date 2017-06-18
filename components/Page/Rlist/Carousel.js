import React from 'react'
import ReactSwipe from 'react-swipe';

//import ItemBar from './ItemBar.js'; //单个轮播图组件

import Item from './Item.js'

export default React.createClass({
  render() {
        var data = this.props.data;
        var len = Math.ceil(data.length/8); //得到有几个板块
        var list = [];
        for(var i = 0; i < len; i++) {
            var t = i * 8;
            list.push(data.slice(t, t + 8))
        }
        return (
        	<div className="swipe-wrapper">
	            <ReactSwipe  key={list.length} className="carousel" swipeOptions={{continuous: true /*auto: 5000,*/ /*startSlide:2*/}}>
	               {
                    list.map(function(value, index){
                         return (
                             <div key={index} className="item">
                                {
                                    value.map(function(value, index){
                                         return <Item key={index} data={value}></Item>        
                                    })
                                }
                             </div>
                          )       
                    })
                   }
	            </ReactSwipe>
            </div>
        );
    }
})