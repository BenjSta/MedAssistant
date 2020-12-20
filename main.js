function showAbout(){
	$("#page-content").empty()
	var data = {
	title: "Dies ist MedAssistant."
	};
	var template = '<div>{{title}}</div>'
	var html = Mustache.render(template, data);
	$("#page-content").append(html);
	$("#page-content").append(['<div class="ribbon"> MedAssistant wurde entwickelt, um die Dokumentationsarbeit von Ärzten zu vereinfachen.',
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
//example of adding elements to menu
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Psychopathologischer Befund</a></li>')
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Internistischer Untersuchungsbefund</a></li>')







