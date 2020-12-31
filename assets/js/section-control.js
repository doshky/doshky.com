const sectionControl = ( function() { 
	const body = $( 'body' ); 
	const navButtons = $( '.nav-button' ); 
	let currentButton = navButtons.eq( 0 ); 

	const sections = $( '.page-set .section' ); 
	let currentSection = sections.eq( 0 ); 

	// let currentSection = sections.eq( 0 ); 
	// let currentPos = 0;  

	// function openSection( section ) { 
	// 	updateNavigation( currentPos, pos ); 

	// 	closeSection( currentSection ); 
	// 	currentSection = section; 
	// 	currentSection.addClass( "section-current" );  
	// } 

	// function openSection( pos ) { 
	// 	getCurrentButton().removeClass( 'button-current' );  
	// 	closeSection( getCurrentSection() ); 
		
	// 	currentPos = pos; 

	// 	getCurrentButton().addClass( 'button-current' )
	// 	getCurrentSection().addClass( "section-current" ); 
	// } 

	function openSection( navButton ) { 
		currentButton.removeClass( 'button-current' );  
		closeSection( currentSection ); 
		
		currentButton = navButton; 
		currentSection = getCurrentSection( navButton ); 

		currentButton.addClass( 'button-current' ); 
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

	function getCurrentButton() { 
		return navButtons.eq( currentPos ); 
	} 

	// function getCurrentSection() { 
	// 	return sections.eq( currentPos ); 
	// } 

	function getCurrentSection( navButton ) { 
		return $( '.' + navButton.attr( 'data-target-section' ) ); 
	}

	function getButtonPos( navButton ) { 
		return navButtons.index( navButton ); 
	}

	function closeSection( section ) { 
		section.removeClass( "section-current" ); 
	} 

	// function getCurrentSection() { 
	// 	return currentSection; 
	// } 

	// function updateSectionButton() { 
	// 	const buttonClassName = currentSection.attr( 'class' ) + '-button'; 

	// } 

	return { 
		openSection, 
		openGallery, 
		closeSection, 
		// closeSections, 
		// openLastSection, 
		// getCurrentSection, 
		closeGallery 
	}; 

}() ); 