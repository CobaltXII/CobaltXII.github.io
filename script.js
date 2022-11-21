var themes =
[
	{'bg': '#fff', 'mg': '#cef', 'fg': '#008', 'shadow': '#0087', 'gradient-1': '#cef', 'gradient-2': '#acf', 'banner-url': 'url(banners/1.png)', 'dialog-url': 'url(dialogs/1.png)'},
	{'bg': '#fff', 'mg': '#cfe', 'fg': '#080', 'shadow': '#0807', 'gradient-1': '#efc', 'gradient-2': '#cfe', 'banner-url': 'url(banners/2.png)', 'dialog-url': 'url(dialogs/2.png)'},
	{'bg': '#fff', 'mg': '#fec', 'fg': '#800', 'shadow': '#8007', 'gradient-1': '#fec', 'gradient-2': '#fce', 'banner-url': 'url(banners/3.png)', 'dialog-url': 'url(dialogs/3.png)'}
];

var theme = themes[Math.floor(new Date().getTime() / 1000) % themes.length];

var root = document.querySelector(':root');

for (var property in theme)
{
	root.style.setProperty('--' + property, theme[property]);
}