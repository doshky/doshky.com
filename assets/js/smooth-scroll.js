$( document ).on( 'click', '.inner-link', smoothScrollHandler ); 

function smoothScrollHandler( e ) { 
	// Preventing default click response
	e.preventDefault(); 

	// Referencing the button 
	const innerLink = $( this ); 

	// Scrolling to the button target section
	const targetSection = $( '#' + innerLink.attr( 'data-target-section' ) );  
	const scrollDistance = targetSection.offset().top; 
	$( 'html, body' ).animate( { scrollTop: scrollDistance }, 500 ); 

}