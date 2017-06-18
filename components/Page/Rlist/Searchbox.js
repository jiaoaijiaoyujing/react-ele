import React from 'react'
var browserHistory = require('react-router').browserHistory; 
export default React.createClass({
  getInitialState() {
    return {
        text: ''
    }
  },
  change(event) {
  	this.setState({
  		text: event.target.value
  	})
  },
  submit(event) {
    event.preventDefault();
    if(!this.state.text.trim()) {
      return;
    }
    var searchPath = '/search/' + this.props.geohash + '?keyword=' + this.state.text;
    browserHistory.push(searchPath); //表单提交不刷新页面的实现
  },
  render() {
    return (
    	<div className="list list-inset">
    	  <form action="klsdfjlsdjf" onSubmit={this.submit}>
	    	  <label className="item item-input">
	    	    <i className="icon ion-search placeholder-icon"></i>
	    	    <input value={this.state.text} name="keyword" onChange={this.change} type="text" placeholder="Search"/>
	    	  </label>
    	  </form>
    	</div>

    )
  }
})