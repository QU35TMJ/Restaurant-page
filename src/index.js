import './headerModule.js';
import {home} from './homeModule.js';
import {menu} from './menuModule.js';
import {contact} from './contactModule.js';

const header = document.querySelector('header');

const swapContent = function(event) {
	const newContentLink = event.target.closest('a');
	const mainSection = document.querySelector('.main-section');

	if(!newContentLink.dataset.content) return;

	const highlight = function(element) {
		const previousHighlight = header.querySelector('.nav-list-link');
		if(previousHighlight) {
			previousHighlight.classList.remove('nav-list-link');
		}
		element.classList.add('nav-list-link');
	};
		
	if(mainSection) {
		mainSection.remove();
	}


	if(newContentLink.dataset.content === 'home') {
		home();
	}else if(newContentLink.dataset.content === 'menu') {
		menu();
	}else if(newContentLink.dataset.content === 'contact') {
		contact();
	}
	highlight(newContentLink);
};

header.addEventListener('click', swapContent);
header.querySelector('.nav-list-link[data-content="home"]').click();