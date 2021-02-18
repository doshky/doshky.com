$( '.main-nav' ).on( 'click', smoothScrollHandler ); 

function smoothScrollHandler( e ) { 
	// Preventing default click response
	e.preventDefault(); 

	// Ensuring that a button is clicked
	const target = $( e.target ); 
	if ( !target.is( '.nav-button' ) ) { 
		return; 
	} 

	// Scrolling to the button target section
	const targetSection = $( '#' + target.attr( 'data-target-section' ) ); 
	const scrollDistance = targetSection.offset().top; 
	$( 'html' ).animate( { scrollTop: scrollDistance }, 500 ); 

}