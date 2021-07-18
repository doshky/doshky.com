$( '.send-message' ).on( 'click', 'button', function( e ) { 
	const button = $( this ); 
	const warningMessage = $( '.warning-message' ); 

	if ( button.is( '.submit-message-button' ) ) { 
		warningMessage.addClass( 'display' );  
	} else if ( button.is( '.warning-message-button' ) ) { 
		warningMessage.removeClass( 'display' ); 
	}

} ); 