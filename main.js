import {GroupModule} from "/MedAssistant/modu/GroupModule.js";
import {ChoiceModule} from "/MedAssistant/modu/ChoiceModule.js";
import {Option} from "/MedAssistant/modu/Option.js";


var page_content = document.createElement('div');
document.body.append(page_content);
var my_first_module = new GroupModule(
    "Bewusstsein", page_content);
var my_first_module_child = new GroupModule(
    "Auswahlmenü", my_first_module.html_element)

//my_first_module_child.options.push(new Option("Option 1", "", false));
//my_first_module_child.options.push(new Option("Option 2", "", false));
//my_first_module_child.options.push(new Option("Option 3", "", false));

//my_first_module.modules.push(my_first_module_child);
//my_first_module.render();
var my_second_module = new GroupModule("Orientierung", page_content);
//example of adding elements to menu
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Psychopathologischer Befund</a></li>')
$("#forms").append('<li class="pure-menu-item"><a href="#" class="pure-menu-link">Internistischer Untersuchungsbefund</a></li>')







