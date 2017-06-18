//最外层容器组件
import React from 'react'
import {Link} from 'react-router'
export default React.createClass({
  render() {
    return (
    	<div>
			  {this.props.children}
    	</div>

    )
  }
})