$("#menu-toggle").get(0).addEventListener('click', function (e) {
    $("#tucked-menu").get(0).classList.toggle('custom-menu-tucked');
    $("#menu-toggle").get(0).classList.toggle('x');
    });

function showAbout(){
	$("#page-content").empty();
	$.get("assets/about.html", function(html_string){
		$("#page-content").append(html_string);
	});	
}
