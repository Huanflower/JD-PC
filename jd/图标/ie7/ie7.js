/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-shopping-cart': '&#xe900;',
		'icon-search': '&#xe901;',
		'icon-error': '&#xe902;',
		'icon-cancel': '&#xe902;',
		'icon-close': '&#xe902;',
		'icon-partially-checked': '&#xe902;',
		'icon-cart': '&#xe93a;',
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-cross': '&#xea0f;',
		'icon-ctrl': '&#xea50;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
