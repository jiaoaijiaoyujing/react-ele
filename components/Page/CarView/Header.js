import React from 'react'

export default React.createClass({
   shouldComponentUpdate(){
    return false;
  },
  render() {
  	
    return (
    	<div className="top-wrap">
        <div className="header">
          <div className="headzhezhao">
          
          </div>
        </div>
        <div className="tab-nav">
          <a href="javascript:;" className="tab-nav-left tab-nav-con">
            <span>商品</span>
          </a>
          <a href="javascript:;" className="tab-nav-right tab-nav-con">
            <span>商家</span>
          </a>
        </div>
      </div>
    )
  }
})