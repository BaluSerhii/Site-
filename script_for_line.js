function animationLine(){
	let topLine = document.querySelector('.top-line-mobile-menu');
	let bottomLine = document.querySelector('.bottom-line-mobile-menu');

	
	if(!topLine.classList.contains('animation-top-line') && !bottomLine.classList.contains('animation-bottom-line')) {
		topLine.classList.remove('animation-top-line-rewerse');
		bottomLine.classList.remove('animation-bottom-line-rewerse');

		topLine.classList.add('animation-top-line');
		bottomLine.classList.add('animation-bottom-line');
	} else {
		topLine.classList.remove('animation-top-line');
		bottomLine.classList.remove('animation-bottom-line');

		topLine.classList.add('animation-top-line-rewerse');
		bottomLine.classList.add('animation-bottom-line-rewerse');
	}
}