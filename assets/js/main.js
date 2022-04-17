( function() { 
    window.addEventListener( 'click', function( e ) { 
        const clickTarget = e.target; 
        const hasClass = hasClassElement( clickTarget ); 

        if ( !hasClass( 'control-button' ) ) { 
            return; 
        } 

        //if ( !hasClass( 'button-open-page' ) ) {
            e.preventDefault(); 
        //} 

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

