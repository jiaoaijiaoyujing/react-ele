import React from 'react'

import WrapperDropMenu from './wrapperDropMenu';


export default React.createClass({

  render() {
    return (
    	<div className="button-bar">
              <a className="button">美食</a>
              <WrapperDropMenu></WrapperDropMenu>         
              <a className="button">过滤</a>
        </div>
    )
  }
})

