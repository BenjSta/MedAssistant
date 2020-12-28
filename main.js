import {GroupModule} from "/MedAssistant/modu/GroupModule.js";
import {ChoiceModule} from "/MedAssistant/modu/ChoiceModule.js";
import {Option} from "/MedAssistant/modu/Option.js";


var page_content = document.createElement('div');
document.body.append(page_content);
var my_first_module = new GroupModule(
    "Bewusstsein", page_content);
var my_first_module_child = new ChoiceModule(
    "Qualitatives Bewusstsein", my_first_module.child_area)

my_first_module_child.options.push(
    new Option("klar", "", false, my_first_module_child.options_area, my_first_module_child.options));
my_first_module_child.options.push(
    new Option("getrübt", "", false, my_first_module_child.options_area, my_first_module_child.options));
my_first_module_child.options.push(
    new Option("unbewusst", "", false, my_first_module_child.options_area, my_first_module_child.options));

//my_first_module.modules.push(my_first_module_child);
//my_first_module.render();
var my_second_module = new GroupModule("Orientierung", page_content);
//example of adding elements to menu
document.getElementById("forms").innerHTML += 
'<li class="pure-menu-item"><a href="#" class="pure-menu-link">Psychopathologischer Befund</a></li>';
document.getElementById("forms").innerHTML +=
'<li class="pure-menu-item"><a href="#" class="pure-menu-link">Internistischer Untersuchungsbefund</a></li>';







