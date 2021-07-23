$( document ).on( 'click', '.inner-link', smoothScrollHandler ); 

function smoothScrollHandler( e ) { 
	// Preventing default click response
	e.preventDefault(); 

	// Getting the button target section
	const targetSectionSelector = $( this ).attr( 'data-target-section' ); 

	$( '.section-current' ).removeClass( 'section-current' ); 

	// Scrolling to the button target section 
	const scrollDistance = $( targetSectionSelector ).offset().top; 
	$( 'html, body' ).animate( { scrollTop: scrollDistance }, 500, function() { 
		// Updates previous and current section  
		$( targetSectionSelector ).addClass( 'section-current' );

	} );  

} 

setTimeout( animationScrollHandler, 5000 ); 
function animationScrollHandler( e ) { 
	// Getting the button target section
	const targetSectionSelector = '#welcome-section'; 

	// Scrolling to the button target section 
	const scrollDistance = $( targetSectionSelector ).offset().top; 
	$( 'html, body' ).animate( { scrollTop: scrollDistance }, 500, function() { 
		$( targetSectionSelector ).addClass( 'section-current' ); 

	} ); 
 
} 