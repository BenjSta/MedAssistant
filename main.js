
import {Option} from "/MedAssistant/modu/Option.js";

import {loadForm, parseYamlFile} from "/MedAssistant/other_js/yaml_io.js";

function goToAbout(){
    var page_content = document.getElementById('page-content');
    fetch('/MedAssistant/static_html/about.html')
        .then(response => response.text())
        .then((data) => page_content.innerHTML = data);
}
window.goToAbout = goToAbout; // make global

function goToUserDefined(){
}
window.goToUserDefined = goToUserDefined; // make global

function addPresetsToMenu(preset_yaml_array){
    for(const preset_yaml of preset_yaml_array){
        var list_item = document.createElement("li");
        list_item.classList = ["pure-menu-item"];
        var link = document.createElement("a");
        link.href = "#";
        link.onclick = function(){loadForm(preset_yaml);};
        link.classList = ["pure-menu-link"];
        link.innerHTML = preset_yaml.name;
        list_item.appendChild(link);
        document.getElementById("forms").appendChild(list_item);
    }
}

// load presets
var preset_files = ['/MedAssistant/form_presets/psypath_befund.yaml',
    '/MedAssistant/form_presets/koerp_unters_befund.yaml',
    '/MedAssistant/form_presets/anamnese.yaml'];
var preset_yaml_promises_array = new Array(preset_files.length);
for(const [index, preset_file] of preset_files.entries()){
    preset_yaml_promises_array[index] = parseYamlFile(preset_file);
}
Promise.all(preset_yaml_promises_array).then(
    (preset_yaml_array) => {addPresetsToMenu(preset_yaml_array);
});
/*
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


*/



