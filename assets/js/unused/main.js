( function() { 
    // Moves current section marking class name from prev to next section
    const moveCurrentClassName = ( function( currentClassName ) { 
        return function( currentSectionSelector ) { 
            $( '.' + currentClassName ).removeClass( currentClassName ); 
            $( currentSectionSelector ).addClass( currentClassName ); 
        }

    }( 'section-current' ) );

    // Scrolls page to target section and marks it as current section 
    const scrollToSection = ( function( duration, callback ) { 
        return function( selector ) { 
            const scrollTop = $( selector ).offset().top; 

            $( '.scroll-window' ).animate( { 
                scrollTop: scrollTop
            }, duration, function() { 
                callback( selector ); 
            } ); 
        }

    }( 500, moveCurrentClassName ) ); 

    // Starts intro animation and scrolls to welcome section on animation end 
    const playIntro = ( function( animationDuration ) { 
        return function() { 
            moveCurrentClassName( '#intro-animation' ); 

            const timeout = setTimeout( function() { 
                scrollToSection( '#welcome-section' ); 
            }, animationDuration ); 
        }
    }( 3500 ) ); 

    playIntro(); 

    $( document ).on( 'click', '.inner-link', function( e ) { 
        const innerLink = $( e.target ); 
      
        e.preventDefault(); 

        const targetSectionSelector = innerLink.attr( 'data-target-section' ); 

        scrollToSection( targetSectionSelector ); 

        if ( innerLink.attr( 'data-target-section' ) === '#intro-animation' ) { 
            playIntro(); 
        }

    } ); 
}() ); 


