( function() { 
    const deselectPrevSection = clearCurrentClassName( 'section-on' ); 
    let reCaptchaRendered = false; 


    window.addEventListener( 'click', function( e ) { 
        const target = e.target; 
        const button = target.classList.contains( 'control-button' ) 
            ? target 
            : target.closest( '.control-button' ); 
        if ( button === undefined ) { 
            return; 
        } 

        const hasClass = hasClassElement( button ); 


        //if ( !hasClass( 'control-button' ) ) { 
        //    return; 
        //} 

        //if ( !hasClass( 'button-open-page' ) ) {
            e.preventDefault(); 
        //} 

        if ( hasClass( 'open-section-button' ) ) { 
            deselectPrevSection( document.getElementById( button.getAttribute( 'data-target-section-id' ) ) ); 

            // Renders reCaptcha when the user heads to contact section and reCaptcha is not rendered 
            if ( button.getAttribute( 'data-target-section-id' ) === 'contact-section' && !reCaptchaRendered ) { 
                // Registers reCaptcha rendering to prevent attempts to render it again 
                reCaptchaRendered = true; 

                reCaptchaRender(); 
            }
            
        } 

        for ( const e of getControlDataList( button.getAttribute( 'data-control-set' ) ) ) { 
            document.querySelector( e.selector ).classList[ e.op ]( e.className ); 
        } 
       
    } ); 

    //function clearCurrentClassName( currentClassName ) { 
    //    const current = document.getElementsByClassName( currentClassName ); 
    //    if ( current.length > 0 ) { 
    //        current[ 0 ].classList.remove( currentClassName ); 
    //    }
    //}

    function clearCurrentClassName( currentClassName ) { 
        let current; 
        return function( next ) { 
            if ( current ) { 
                current.classList.remove( currentClassName ); 
            } 
            current = next; 
        }; 
    }

    function getControlDataList( controlSetString ) { 
        const controlDataList = []; 

        controlSetString
            .split( ', ' ) 
            .forEach( e => { 
                const controlData = e.split( /[.:]/ ); 

                controlDataList.push( { 
                    selector: controlData[ 0 ], 
                    op: controlData[ 1 ], 
                    className: controlData[ 2 ] 
                } ); 
            } );  

        return controlDataList; 
    }

    function hasClassElement( element ) { 
        const classList = element.classList; 

        return function( className ) { 
            return classList.contains( className ); 
        }

    }

}() ); 

