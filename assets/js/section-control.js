const sectionControl = ( function( work, about, contact ) { 
	let currentSection = work; 

	function openSection( section ) { 
		closeSection( currentSection ); 
		currentSection = section; 
		currentSection.addClass( "section-current" ); 
	}

	function openGallery() { 
		closeSections(); 
	} 

	function closeSections() { 
		[ work, about, contact ].forEach( function( section ) { 
			closeSection( section ); 
		} ); 
	} 

	function closeSection( section ) { 
		section.removeClass( "section-current" ); 
	} 

	return { 
		openSection, 
		openGallery, 
		closeSection, 
		closeSections
	}; 

}( $( '.work' ), $( '.about' ), $( '.contact' ) ) ); 