import {GroupModule} from "/MedAssistant/modu/GroupModule.js";

var page_content = $("#page-content");
var my_first_module = new GroupModule("Bewusstsein", [], [], page_content);
my_first_module.render();
var my_second_module = new GroupModule("Kognition", [], [], page_content);
my_second_module.render();
//example of adding elements to menu
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Psychopathologischer Befund</a></li>')
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Internistischer Untersuchungsbefund</a></li>')







