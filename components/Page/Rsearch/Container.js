import React from 'react'
import HeaderSearch from './HeaderSearch';
import List from './List';

var Store = require('../../../Store/SearchStore');

export default React.createClass({
  getInitialState(){
    return {
      list: []
    }
  },
  componentDidMount: function(){
      var geohash = this.props.params.geohash;
      var keyword = this.props.location.query.keyword;
      Store.getListData(geohash, keyword, this);//得到商家列表
  },
  load() {
     Store.loadmoreList(this);
  },
  search(text){
    Store.search(this, text);
  },
  render() {
  	console.log(this.props.params.geohash, this.props.location.query.keyword);
    var keyword = this.props.location.query.keyword;
    return (

    	<div>
    		<HeaderSearch keyword={keyword} onSearch={this.search}></HeaderSearch>
    		<List onloadmore={this.load} data={this.state.list}></List>
    	</div>

    )
  }
})