import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
 
  render() {
    //console.log(458886, Object.assign, Promise);

   // console.log(this.props.data);
    return (
        
        	<ul className="list">
        	    {
        	    	this.props.data.map(function(value, index){
                  var geohash = value.geohash;
                  var path = '/rlist/' + geohash;
        	    		return <li className="item" key={index}><Link to={path}>{value.name}</Link></li>	 	
        	    	})
        	    }
        	</ul>
    )
  },
  onScrollStart: function(){
      console.log('我开始了滚动');         
  }
})