$( '.send-message' ).on( 'submit', function( e ) { 
	const warningMessage = $( '.warning-message' ); 
	warningMessage 
		// On form submit displays warning message 
		.addClass( 'display' ) 
		// On close warning message button click 
		.on( 'click', 'button', function() { 
			// closes warning message and removes close button click handler
			warningMessage 
				.removeClass( 'display' ) 
				.off(); 
		} ); 
} ); 