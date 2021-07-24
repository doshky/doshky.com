// Scroll handler is called on page load to transition to welcome section on animation end 
smoothScrollHandler();  

// Scroll handler is called on button click 
$( document ).on( 'click', '.inner-link', smoothScrollHandler ); 

function smoothScrollHandler( e ) { 
	// Button target section selector
	let targetSectionSelector;  
	// Button target section 
	let targetSection; 
	// Default scroll delay, used when page section is the target  
	let scrollDelay = 0; 
	// Default scroll duration 
	const scrollDuration = 500; 
 
	// Scroll handler is called not only on button click, 
	// but on page load and after scrolling to intro animation section too 
	if ( e ) { 
		// Preventing default click response
		e.preventDefault(); 

		// Getting the button target section
		targetSectionSelector = $( this ).attr( 'data-target-section' );    
	} 

	// On call after scrolling to intro animation section 
	if ( $( '#intro-animation' ).hasClass( 'section-current' ) ) { 
		// Sets moving to welcome section
		targetSectionSelector = '#welcome-section'; 
		// Ensures that animation is over before moving to welcome section 
		scrollDelay = 5000; 

	} 

	// Getting target section 
	targetSection = $( targetSectionSelector ); 
	// Scrolling distance to the button target section 
	const scrollDistance = targetSection.offset().top; 

	setTimeout( function() { 
		$( 'html, body' ).animate( { scrollTop: scrollDistance }, scrollDuration, function() { 
			// Updates previous and current section  
			$( '.section-current' ).removeClass( 'section-current' ); 
			targetSection.addClass( 'section-current' ); 

			// Moving to intro animation section calls scroll handler to move to welcome page after waiting animation to end
			if ( $( '#intro-animation' ).hasClass( 'section-current' ) ) { 
				smoothScrollHandler(); 
			}

		} ); 
	}, scrollDelay ); 

} 
