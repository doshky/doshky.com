// ( function() { 
// 	$( ".gallery" ).vegas( {
// 		slides: [
// 		    { src: "./assets/images/74273925_2574521065964230_343086875277262848_n.jpg" }, 
// 		    { src: "./assets/images/95629555_2959433724139627_3982936818139004928_n.jpg" }, 
// 		    { src: "./assets/images/95409482_2959433690806297_4039085930621960192_n.jpg" }, 
// 		    { src: "./assets/images/70023155_2448442838572054_2379843418823065600_n.jpg" }, 
// 		    { src: "./assets/images/69617793_2448442805238724_1076493570891841536_n.jpg" },
// 		    { src: "./assets/images/10981862_766400356776319_2442975887485609845_n.jpg" },
// 		    { src: "./assets/images/10982484_766400493442972_7814646519377612615_n.jpg" },
// 		    { src: "./assets/images/10984064_766400473442974_5778066791930443440_n.jpg" },
// 		    { src: "./assets/images/10426125_766400340109654_7639500533959033844_n.jpg" }, 
// 		    { src: "./assets/images/10982484_766400493442972_7814646519377612615_nn.jpg" },
// 		], 

// 		overlay: '/assets/plugins/vegas/overlays/01.png', 

// 		transitionDuration: 2000, 
// 		transition: 'zoomOut'
// 	 } ); 
// }() ) 

// 	$( '.fotorama' ).fotorama( { 
// 		width: '100%', 
// 		height: '100%', 
// 		minheight: '100%', 
// 		nav: 'thumbs', 
// 		thumbwidth: 200, 
// 		thumbheight: 120, 
// 		thumbmargin: 4, 
// 		fit: 'cover', 
// 		arrows: false 
// 	} ); 
	

// }() ) 


$( function() { 
	// API key
	const apiKey = '6c2c1beee55c4887b1f60727349410a5'; 

	// Url to use in AJAX call 
	const photosURL = getURL( 
		[ 'method', 'flickr.people.getPublicPhotos' ], 
		[ 'api_key', apiKey ],  
		[ 'user_id', '192275944@N08' ] 
	); 

	// AJAX call to get Flickr photostream entries
	$.get( photosURL, function( data ) { 
		buildGalleryNavigation( $( data ).find( 'photo' ) ); 
	} )
	.then( function( data ) { 
		loadGalleryOn( '.image-preview-list' ); 
	} ); 

	function buildGalleryNavigation( photos ) {  
		// For each photo in the photo entry collection 
		for ( const photo of photos ) { 
			// Building photo sizes object url 
			const sizesURL = getURL( 
				[ 'method', 'flickr.photos.getSizes' ], 
				[ 'api_key', apiKey ], 
				[ 'photo_id', $( photo ).attr( 'id' ) ] 
			); 
			
			// Requesting photo sizes object, using the url 
			$.get( sizesURL, function( data ) { 
				// Finding "size" elements in "sizes" wrapper, 
				// filtering those with the original size (one of them)
				// and getting original photo url 
				const originalURL = $( data ) 
					.find( 'size' ) 
					.filter( function( pos, size ) { 
						return $( size ).attr( 'label' ) === 'Original'; 
					} ) 
					.attr( 'source' ); 

				const mediumURL = $( data ) 
					.find( 'size' ) 
					.filter( function( pos, size ) { 
						return $( size ).attr( 'label' ) === 'Medium'; 
					} ) 
					.attr( 'source' ); 

				// Bulding a list item with a link to the original photo url, 
				// and appending it to gallery navigation element immediately
				$( '#gallery-nav' ).append( `<li class= "image-preview-entry"><a class= "image-preview" href="${originalURL}" style= "background-image: url( '${mediumURL}' )"></a></li>` ); 
			} ); 
		} 

		$( '#gallery-nav' ).attr( 'style', '--entry-count:' + photos.length ); 
	} 

	// Builds Flickr REST request url 
	function getURL( ...parameterPairs ) { 
		// Joining parameter name and value with '=', 
		// and parameter pairs with '&'
		const parameters = parameterPairs.map( function( parameterPair ) { 
			return parameterPair.join( '=' ); 
		} )
		.join( '&' ); 
		
		return `https://www.flickr.com/services/rest/?${parameters}`; 
	} 

	function loadGalleryOn( galleryWrapper ) { 
		$( galleryWrapper ).magnificPopup( { 
			delegate: 'a', 
			type: 'image', 
			gallery: {
				enabled: true 
			} 
		} ); 
	}

} ); 
