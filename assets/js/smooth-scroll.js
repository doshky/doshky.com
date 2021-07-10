$( document ).on( 'click', '.inner-link', smoothScrollHandler ); 

function smoothScrollHandler( e ) { 
	// Preventing default click response
	e.preventDefault(); 

	// Getting the button target section
	const targetSectionSelector = $( this ).attr( 'data-target-section' ); 

	// Scrolling to the button target section 
	const scrollDistance = $( targetSectionSelector ).offset().top; 
	$( 'html, body' ).animate( { scrollTop: scrollDistance }, 500 ); 
 
	// Updates previous and current section 
	$( '.section-current' ).removeClass( 'section-current' ); 
	$( targetSectionSelector ).addClass( 'section-current' ); 

} 