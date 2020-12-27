import {Module} from "/MedAssistant/modu/Module.js";

class ChoiceModule extends Module {
    constructor(name, html_target_element) {
        super(name, "/MedAssistant/modu/ChoiceModuleGUI.template.html", html_target_element);
        this.options = [];
        this.text = [];
        this.multiple = true;
    }
}
export {ChoiceModule};
