( function() { 
	// Getting references to all page sections
	const pages = $( '.page-set .section' ); 

	// Referencing the first page section as current 
	let current = pages
		.filter( '.current' ); 

	$( '.page-set' ).on( 'click', '.nav-button', function( e ) { 
		// Getting button target page position 
		const pos = $( this )
			.attr( 'data-pos' ); 

		// Moving current class name from former to latter page section 
		current
			.removeClass( 'current' ); 
		current = pages
			.eq( pos )
			.addClass( 'current' ); 

	} ); 

}() )