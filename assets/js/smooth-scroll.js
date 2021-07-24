( function() { 

	const smoothScrollHandler = ( function() { 
		const body = $( 'body' ); 
		let galleryScriptLoaded = false; 
		let contactScriptLoaded = false; 

		return function( e ) { 
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

			const timeout = setTimeout( function() { 
				$( 'html' ).animate( { scrollTop: scrollDistance }, scrollDuration, function() { 
					clearTimeout( timeout ); 
					
					// Updates previous and current section  
					$( '.section-current' ).removeClass( 'section-current' ); 
					targetSection.addClass( 'section-current' ); 

					// Moving to intro animation section calls scroll handler to move to welcome page after waiting animation to end
					if ( targetSection.is( '#intro-animation' ) ) { 
						smoothScrollHandler(); 
					} else if ( targetSection.is( '#gallery-section' ) && !galleryScriptLoaded ) { 
						galleryScriptLoaded = true; 

						[ 
							'/assets/plugins/magnific-popup/dist/jquery.magnific-popup.min.js', 
							'/assets/js/gallery.js' 
						]
						.forEach( function( value ) { 
							$( '<script />' )
								.attr( 'src', value ) 
								.attr( 'type', 'text/javascript' ) 
								.appendTo( body ); 
						} ); 
							
						
						// .then( console.log( 'Gallery scripts loaded.' ) );  

					} else if ( targetSection.is( '#contact-section' ) && !contactScriptLoaded ) { 
						contactScriptLoaded = true; 

						[ 
							'/assets/js/send-message.js', 
							'/assets/js/form-submission-handler.js' 
						]
						.forEach( function( value ) { 
							$( '<script />' ) 	
								.attr( 'src', value ) 
								.attr( 'type', 'text/javascript' )  
								.appendTo( body ); 
						} ); 
						
					
						// .then( console.log( 'Contact form scripts loaded.' ) ); 

					}

				} ); 
			}, scrollDelay ); 
		}

	}() );  

	// Scroll handler is called on button click 
	$( document ).on( 'click', '.inner-link', smoothScrollHandler ); 

	// Scroll handler is called on page load to transition to welcome section on animation end 
	smoothScrollHandler();  

}() ); 