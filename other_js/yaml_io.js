import { GroupModule } from "/MedAssistant/modu/GroupModule.js";
import { ChoiceModule } from "/MedAssistant/modu/ChoiceModule.js";
import { TextfieldModule } from "/MedAssistant/modu/TextfieldModule.js";

function loadModules(modules_yaml, html_target, level) {
    var modules = [];
    for (const module_yaml of modules_yaml) {
        switch (module_yaml.type) {
            case "group":
                modules.push(new GroupModule(module_yaml, html_target, level));
                break;
            case "textfield":
                break;
            case "choice":
                modules.push(new ChoiceModule(module_yaml, html_target, level));
                break;
            default:
                throw Error("Unknown module type");
        };
    }
    return modules;
}

function loadForm(form_yaml) {
    var page_content = document.getElementById('page-content');
    page_content.innerHTML = "";
    //var page_content = document.getElementById('page-content');
    //page_content.innerHTML = form_yaml.name;
    var modules = loadModules(form_yaml.modules, page_content, 0);
    return modules;
}

function parseYamlFile(file) {
    return fetch(file).then(response =>
        response.text()).then((data) => YAML.parse(data));
}

export { loadModules, loadForm, parseYamlFile };