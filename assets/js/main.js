//( function() { 
//    window.addEventListener( 'click', function( e ) { 
//        const clickTarget = e.target; 
//        if ( clickTarget.classList.contains( 'control-button' ) ) { 
//            if ( !clickTarget.classList.contains( 'button-open-page' ) ) { 
//                e.preventDefault(); 
//            }
            
//            const expandTargetID = clickTarget.getAttribute( 'href' );  
//            const expandTarget = document.querySelector( expandTargetID ); 

//            if ( clickTarget.classList.contains( 'button-open' ) ) { 
//                expandTarget.classList.add( 'section-open' ); 
//            } else if ( clickTarget.classList.contains( 'button-close' ) ) { 
//                expandTarget.classList.remove( 'section-open' ); 

//                if ( clickTarget.classList.contains( 'button-close-section' ) ) { 
//                    expandTarget.classList.remove( 'page-section-open' ); 

//                    const section = clickTarget.closest( '.section' ); 
//                    section.classList.remove( 'section-open' ); 

//                }
//            } 

//            if ( clickTarget.classList.contains( 'nav-link' ) ) { 
//                const pageBody = document.querySelector( '#page-body' ); 
//                pageBody.classList.add( 'page-section-open' ); 
//            }

//        } 
//    } ); 

//}() ); 

//( function() { 
//    window.addEventListener( 'click', function( e ) { 
//        const clickTarget = e.target; 
//        const hasClass = hasClassElement( clickTarget ); 

//        if ( !hasClass( 'control-button' ) ) { 
//            return; 
//        } 

//        // Control class name to change the state of an element 
//        const controlClassName = clickTarget.getAttribute( 'data-control-class-name' ); 

//        // Target element to change state 
//        const controlTargetSelector = clickTarget.getAttribute( 'href' ); 
//        const controlTarget = document.querySelector( controlTargetSelector ); 

//        // The control class name is added to or removed from the target element based on button type 
//        if ( hasClass( 'control-button-on' ) ) { 
//            controlTarget.classList.add( controlClassName ); 
//        } else if ( hasClass( 'control-button-off' ) ) { 
//            controlTarget.classList.remove( controlClassName ); 
//        } 

//        if ( hasClass( 'nav-link' ) ) { 
//            document
//                .querySelector( '#page-body' )
//                .classList
//                .add( 'content-section-on' ); 

//        } 

//        if ( hasClass( 'button-close-section' ) ) { 
//            document
//                .querySelector( '#page-body' )
//                .classList
//                .remove( 'content-section-on' ); 

//        }
       
//    } ); 

//    function hasClassElement( element ) { 
//        const classList = element.classList; 

//        return function( className ) { 
//            return classList.contains( className ); 
//        }

//    }

//}() ); 


( function() { 
    window.addEventListener( 'click', function( e ) { 
        const clickTarget = e.target; 
        const hasClass = hasClassElement( clickTarget ); 

        if ( !hasClass( 'control-button' ) ) { 
            return; 
        } 

        if ( !hasClass( 'button-open-page' ) ) {
            e.preventDefault(); 
        }

        for ( const e of getControlDataList( clickTarget.getAttribute( 'data-control-set' ) ) ) { 
            document.querySelector( e.selector ).classList[ e.op ]( e.className ); 
        }
       
    } ); 

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

