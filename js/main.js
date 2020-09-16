function menuActive() {
	let btn = document.querySelectorAll('.main-menu__item');
	btn.forEach(element =>{
		element.addEventListener('click', event =>{
			btn.forEach(link =>{
				link.classList.remove('active');
			});
			event.target.classList.add('active');
		})
	})
}




function menuResponsive() {
	let menu = document.querySelector('.main-menu'),
		bars = document.querySelector('.main-menu__icon'),
		auxs = 0;


	bars.addEventListener('click', ()=>{
		if (auxs == 0) {
			menu.style.top = '0';
			menu.classList.toggle('main-menu--clip');
			bars.classList.remove('fa-bars');	
			bars.classList.add('fa-times');
			auxs++;
		} else {
			menu.classList.remove('main-menu--clip');
			bars.classList.add('fa-bars');	
			bars.classList.remove('fa-times');
			menu.style.top = '-100vh';
			auxs = 0;
		}
	})	
}


function scroll() {
	let prevScrollPos = window.pageYOffset;

	window.onscroll = () =>{
		let currentScrollPos = window.pageYOffset;
		let header = document.querySelector('.header');

		if ( prevScrollPos >= currentScrollPos) {
			header.style.top = '0';
		} else {
			header.style.top = '-80px';
		}
		prevScrollPos = currentScrollPos;
	}
}
menuActive();
menuResponsive();
scroll();