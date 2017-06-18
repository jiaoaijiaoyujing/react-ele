import React from 'react';

import List from './List';


var Store = require('../../../Store/AddressStore');


export default React.createClass({
  getInitialState() {
    return {
        text: Store.getText(),
        list: []
    }
  },
  componentDidMount: function(){
     console.log('地址列表组件渲染完成');  
     Store.getData(this.state.text, this, true);   
  },
  change(event) {
    this.setState({
        text: event.target.value
    })
  },
  render() {
    console.log(this.state.list, this.state.text);
    return	(
    	 <div>
    	 	<div className="bar bar-header bar-positive">
    	 	  <h1 className="title">搜索地址</h1>
    	 	</div>
    	 	<div className="list list-inset has-header">
    	 	  <label className="item item-input">
    	 	    <i className="icon ion-search placeholder-icon"></i>
    	 	    <input onChange={this.change} value={this.state.text} type="text" placeholder="Search"/>
    	 	  </label>
    	 	  <button onClick={this.search} className="button button-full button-positive">
    	 	    搜索
    	 	  </button>
          <List data={this.state.list}></List>
    	 	</div>
    	 </div>
    )
  },
  search() {
    console.log('我进行了搜索', this.state.text);
    Store.getData(this.state.text, this);
  }
})