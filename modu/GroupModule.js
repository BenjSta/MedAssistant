import {Module} from "/MedAssistant/modu/Module.js";
import {loadModules} from "/MedAssistant/other_js/yaml_io.js";


class GroupModule extends Module {
    children;
    replacements;
    collapsable;
    view_normal_button;
    child_area;

    constructor(yaml_object, html_parent_element, level) {
        super(yaml_object, html_parent_element, level);
        this.children = [];
        this.replacements = [];
        this.collapsable = false;
        this.view_normal_button = false;
        
        this.children = loadModules(yaml_object.modules, this.body_element, level + 1);

        
    }
}

export {GroupModule};
