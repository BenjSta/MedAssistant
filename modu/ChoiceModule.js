import {Module} from "/MedAssistant/modu/Module.js";
import {Option} from "/MedAssistant/modu/Option.js";

class ChoiceModule extends Module {
    options;
    text;
    multiple;
    options_area;

    constructor(yaml_object, html_target_element, level) {
        super(yaml_object, html_target_element, level);
        this.options = [];
        this.text = [];
        this.multiple = true;
        var form = document.createElement('form');
        form.setAttribute('class', 'pure-form pure-form-stacked');
        this.body_element.appendChild(form);
        this.options_area = document.createElement('fieldset')
        form.appendChild(this.options_area)
        for(const yaml_option of yaml_object.options){
            this.options.push(new Option(yaml_option, this.options_area, this.options));
        }
    }
}
export {ChoiceModule};

