import React from 'react'
export default React.createClass({
  render() {
        var path = "//fuss10.elemecdn.com" + this.props.data.image_url;
        return (
            <a href="javascript:">
            	<div className="container">
            		<img src={path}/>
            	</div>
            	<span className="title">{this.props.data.title}</span>
            </a>
        );
    }
})