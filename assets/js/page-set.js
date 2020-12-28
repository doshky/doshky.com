( function() { 
	let galleryOpen = false; 

	$( '.page-set' ).on( 'click', function( e ) { 
		const target = $( e.target ); 
		const switchGalleryButton = $( '.switch-gallery-button' ); 

		if ( !target.is( switchGalleryButton ) ) { 
			return; 
		} 

		if ( !galleryOpen ) { 
			sectionControl.openGallery();  
		} else { 
			sectionControl.closeGallery(); 
		} 

		galleryOpen = !galleryOpen; 

	} ); 

	
	
}() )