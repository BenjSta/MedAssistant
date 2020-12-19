
function showAbout(){
	initialize();
	$("body").append(['<div class="main"> MedAssistant wurde entwickelt, um die Dokumentationsarbeit von Ärzten zu vereinfachen.',
	'<form class="pure-form">',
	'<h3>Qualitatives Bewusstsein</h3>',
    '<label for="checkbox1" class="pure-checkbox">',
	'	<input type="checkbox" id="checkbox1" /> klar </label>',
	'<label for="checkbox2" class="pure-checkbox">',
	'	<input type="checkbox" id="checkbox2" /> Bewusstseinstrübung</label>',
	'<label for="checkbox3" class="pure-checkbox">',
	'	<input type="checkbox" id="checkbox3" /> Bewusstseinseinengung</label>',
	'<label for="checkbox4" class="pure-checkbox">',
	'	<input type="checkbox" id="checkbox4" /> Bewusstseinsverschiebung</label></form></div>'].join('\n'));
}

function initialize(){
	$("body").empty()
	$("body").append(['<div class="custom-menu-wrapper">',
	'<div class="pure-menu custom-menu custom-menu-top">',
	'	<a href="javascript:initialize();" class="pure-menu-heading custom-menu-brand">MedAssistant</a>',
	'	<a href="#" class="custom-menu-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>',
	'</div>',
	'<div class="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">',
	'	<div class="custom-menu-screen"></div>',
	'	<ul class="pure-menu-list">',
	'		<li class="pure-menu-item"><a href="javascript:showAbout();" class="pure-menu-link">Über MedAssistant</a></li>',
	'	</ul>',
	'	</div>',
	'</div>',
	'<style>',
	'.main {',
    'padding: 2em;',
    'color: black;}</style>',
	'<div class="main">',
	'<h1>In Bearbeitung.</h1>',
	'</div>'].join('\n'));
	(function (window, document) {
      document.getElementById('toggle').addEventListener('click', function (e) {
          document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
          document.getElementById('toggle').classList.toggle('x');
      });
      })(this, this.document);
	var data = {
	title: "Dies ist MedAssistant."
	};
	var template = '<div class="main">{{title}}<div>'
	var html = Mustache.render(template, data);
	$("body").append(html);
}

initialize();




