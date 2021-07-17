const warningMessage = $( '.warning-message' ); 

$( '.submit-message-button' ).on( 'click', function( e ) { 
	warningMessage.addClass( 'display' ); 
} ); 

$( '.warning-message-button' ).on( 'click', function( e ) { 
	e.preventDefault(); 

	warningMessage.removeClass( 'display' ); 
} ); 