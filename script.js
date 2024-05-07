var themes =
[
	{'bg': '#fff', 'mg': '#cef', 'fg': '#008', 'shadow': '#0087', 'gradient-1': '#cef', 'gradient-2': '#acf', 'banner-url': 'url(banners/1.png)', 'dialog-url': 'url(dialogs/1.png)'},
	{'bg': '#fff', 'mg': '#cfe', 'fg': '#080', 'shadow': '#0807', 'gradient-1': '#efc', 'gradient-2': '#cfe', 'banner-url': 'url(banners/2.png)', 'dialog-url': 'url(dialogs/2.png)'},
	{'bg': '#fff', 'mg': '#fec', 'fg': '#800', 'shadow': '#8007', 'gradient-1': '#fec', 'gradient-2': '#fce', 'banner-url': 'url(banners/3.png)', 'dialog-url': 'url(dialogs/3.png)'},
	{'bg': '#fff', 'mg': '#eee', 'fg': '#888', 'shadow': '#8887', 'gradient-1': '#eee', 'gradient-2': '#ccc', 'banner-url': 'url(banners/4.png)', 'dialog-url': 'url(dialogs/4.png)'},
];

var theme = themes[Math.floor(new Date().getTime() / 1000) % themes.length];

var root = document.querySelector(':root');

for (var property in theme)
{
	root.style.setProperty('--' + property, theme[property]);
}

var textToType1 = "Adam Sidat";
var typingSpeed1 = 100;

function typeText1() {
	var adam = document.getElementById('adam');
	var index = 0;
	var interval = setInterval(() => {
		if (index < textToType1.length) {
			adam.textContent += textToType1[index];
			index++;
		} else {
			clearInterval(interval);
			typeText2();
		}
	}, typingSpeed1);
}

var textToType2 = "aka. cxii/CobaltXII ";
var typingSpeed2 = 50;

function typeText2() {
	var aka = document.getElementById('aka');
	var index = 0;
	var interval = setInterval(() => {
		if (index < textToType2.length) {
			aka.textContent += textToType2[index];
			index++;
		} else {
			clearInterval(interval);
		}
	}, typingSpeed2);
}

window.onload = typeText1;