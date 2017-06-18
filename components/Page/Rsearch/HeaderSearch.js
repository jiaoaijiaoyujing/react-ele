import React from 'react'
export default React.createClass({
  getInitialState(){
    return {
      text: this.props.keyword
    }
  },
  change: function(event){
     this.setState({
        text: event.target.value
     })     
  },
  submit: function(event){
    event.preventDefault();  //阻止表单默认提交
    this.props.onSearch(this.state.text);
    console.log('提交');   
  },
  render() {
    return (
      <form action="" onSubmit={this.submit}>
    	<div className="bar bar-header bar-positive item-input-inset">
    	   
            <label className="item-input-wrapper">
              <i className="icon ion-ios-search placeholder-icon"></i>
              <input onChange={this.change} value={this.state.text} type="search" placeholder="Search"/>
            </label>
            <button className="button button-clear">
              返回
            </button>
        
    	</div>
       </form>
    )
  }
})