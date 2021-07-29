( function() { 
	const warningMessage = $( '.warning-message' ); 
	// On close warning message button click 
	warningMessage.on( 'click', '.warning-message-button', function() { 
		// closes warning message and removes close button click handler
		warningMessage 
			.removeClass( 'display' ); 
	} ); 

	$( '.send-message' ).on( 'submit', function( e ) { 
		warningMessage 
			// On form submit displays warning message 
			.addClass( 'display' ); 
	} ); 
}() ); 