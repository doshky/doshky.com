const sectionControl = ( function( sections ) { 
	let currentSection = sections.eq( 0 ); 
	const body = $( 'body' ); 

	function openSection( section ) { 
		closeSection( currentSection ); 
		currentSection = section; 
		currentSection.addClass( "section-current" ); 
	}

	// function openGallery() { 
	// 	closeSections(); 
	// } 

	function openGallery() { 
		body.addClass( 'ui-hidden' );
		body.removeClass( 'ui-visible' ); 
	} 

	function closeGallery() { 
		body.addClass( 'ui-visible' ); 
		body.removeClass( 'ui-hidden' ); 
	} 

	// function openLastSection() { 
	// 	openSection( currentSection ); 
	// }

	// function closeSections() { 
	// 	for ( section of sections ) { 
	// 		closeSection( $( section ) ); 
	// 	}  
	// } 

	function closeSection( section ) { 
		section.removeClass( "section-current" ); 
	} 

	function getCurrentSection() { 
		return currentSection; 
	}

	return { 
		openSection, 
		openGallery, 
		closeSection, 
		// closeSections, 
		// openLastSection, 
		getCurrentSection, 
		closeGallery 
	}; 

}( $( '.page-set .section' ) ) ); 