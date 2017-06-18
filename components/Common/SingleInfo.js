import React from 'react'

import { Link } from 'react-router'

export default React.createClass({
  render() {
  	var imgpath = this.props.item.image_path;
  	var path = "";
    var geoHash = JSON.parse(localStorage.getItem('geohash'));
    var pagePath = '/detail/' + geoHash + '/' + this.props.item.id;
  	if(imgpath) {
	  	var a = imgpath.charAt(0);
  		var b = imgpath.substring(1,3);
  		var c = imgpath.slice(3);
  		var d = imgpath.slice(32);
  		path = 'http://fuss10.elemecdn.com/'+ a+ '/' + b + '/' + c + '.' + d + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
  	}

    return (
    	<Link to={pagePath} className="item item-avatar" href="#">
    	     <img src={path}/>
    	     <h2>{this.props.item.name}</h2>
    	     <p>{this.props.item.description}</p>
    	</Link>
    )
  }
})