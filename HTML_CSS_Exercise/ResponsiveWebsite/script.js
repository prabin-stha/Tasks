const closeButton = document.querySelector('.close');
const checkbox = document.querySelector('#menu');
const label = document.querySelector('[for="menu"]');

const onClose = e => {
	document.body.classList.remove('overflow-none');
	checkbox.checked = false;
};

label.addEventListener('click', e => {
	document.body.classList.add('overflow-none');
});

closeButton.addEventListener('click', onClose);

links = document.querySelectorAll('.nav-link');
links.forEach(el => {
	el.addEventListener('click', () => {
		if (checkbox.checked) {
			onClose();
		}
	});
});
