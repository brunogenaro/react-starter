import React from 'react';

import FeedItem from './components/FeedItem';

class Feed extends React.Component {

	componentDidMount() {
		//
	    var msnry = new Masonry( '#feed', {
		  columnWidth: 100,
		  itemSelector: '.feed-item',
		  gutter: 1,
		  percentPosition: true
		});
	}



  render() {

  	let items = [
  		{
  			image: "src/images/image-1.jpg"
  		},
  		{
  			image: "src/images/image-2.jpg"
  		},
  		{
  			image: "src/images/image-3.jpg"
  		},
  		{
  			image: "src/images/image-4.jpg"
  		}
  	];
	
    return(

    	<div id="feed">

			<div className="feed-item">
				<img src={} />
			</div>
			
		</div>

    );
  }
}

export default Feed;
