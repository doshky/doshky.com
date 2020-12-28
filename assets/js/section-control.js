const sectionControl = ( function( sections ) { 
	let currentSection = sections.eq( 0 ); 

	function openSection( section ) { 
		closeSection( currentSection ); 
		currentSection = section; 
		currentSection.addClass( "section-current" ); 
	}

	function openGallery() { 
		closeSections(); 
	} 

	function closeSections() { 
		sections.forEach( function( section ) { 
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

}( $( '.page-set .section' ) ) ); 