( function() { 
    $( '#gallery-section .image-preview-list' ).magnificPopup( { 
        delegate: 'a', 
        type: 'image', 
        gallery: {
            enabled: true 
        } 
    } ); 
}() ); 