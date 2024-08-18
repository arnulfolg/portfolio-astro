const userDarkDefaults = window.matchMedia(
	'(prefers-color-scheme: dark)'
).matches;
const userLocalStorage = localStorage.theme;

const popoover = document.querySelector('#popover_theme') as HTMLElement;
const icon = document.querySelector('#theme_icon') as HTMLElement;
const buttonLight = document.querySelector(
	'button#toggleLight'
) as HTMLButtonElement;
const buttonDark = document.querySelector(
	'button#toggleDark'
) as HTMLButtonElement;
const buttonSystem = document.querySelector(
	'button#toggleSystem'
) as HTMLButtonElement;

if (userDarkDefaults && userLocalStorage != 'light') {
	document.documentElement.classList.add('dark');
	icon.classList.add('fa-moon');
} else {
	document.documentElement.classList.remove('dark');
	icon.classList.add('fa-sun');
}

buttonLight?.addEventListener('click', () => {
	icon.classList.remove('fa-sun', 'fa-moon', 'fa-desktop');
	icon.classList.add('fa-sun');
	document.documentElement.classList.remove('dark');
	document.documentElement.classList.add('light');
	localStorage.theme = 'light';
	popoover.hidePopover();
});

buttonDark?.addEventListener('click', () => {
	icon.classList.remove('fa-sun', 'fa-moon', 'fa-desktop');
	icon.classList.add('fa-moon');
	document.documentElement.classList.remove('light');
	document.documentElement.classList.add('dark');
	localStorage.theme = 'dark';
	popoover.hidePopover();
});

buttonSystem?.addEventListener('click', () => {
	icon.classList.remove('fa-sun', 'fa-moon', 'fa-desktop');
	icon.classList.add('fa-desktop');
	document.documentElement.classList.remove('dark', 'light');
	localStorage.removeItem('theme');
	popoover.hidePopover();
});
