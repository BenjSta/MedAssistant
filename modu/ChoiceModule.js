import {Module} from "/MedAssistant/modu/Module.js";

class ChoiceModule extends Module {
    constructor(name, html_target_element) {
        super(name, "/MedAssistant/modu/ChoiceModuleGUI.template.html", html_target_element);
        this.options = [];
        this.text = [];
        this.multiple = true;
        var form = document.createElement('form');
        form.setAttribute('class', 'pure-form pure-form-stacked');
        this.html_element.appendChild(form);
        this.options_area = document.createElement('fieldset')
        form.appendChild(this.options_area)
    }
}
export {ChoiceModule};
