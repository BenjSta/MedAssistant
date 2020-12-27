import {Module} from "/MedAssistant/modu/Module.js";

class GroupModule extends Module {
    constructor(name, html_parent_element) {
        super(name, "/MedAssistant/modu/GroupModuleGUI.template.html", html_parent_element);
        this.child_area = this.html_element.getElementsByClassName('child-area')
        this.children = [];
        this.replacements = [];
        this.collapsable = false;
        this.view_normal_button = false;
    }
}

export {GroupModule};
