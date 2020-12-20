import {Module} from "/MedAssistant/modu/Module.js";

class GroupModule extends Module {
    constructor(name, modules, replacements, parent_element) {
        super(name, "/modu/GroupModuleGUI.template.html", parent_element);
        this.modules = modules;
        this.replacements = replacements;
        this.collapsable = false;
        this.view_normal_button = false;
    }
}

export {GroupModule};
