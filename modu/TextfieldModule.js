import {Module} from "/MedAssistant/modu/Module.js";

class TextfieldModule extends Module {
    constructor(name, size, text) {
        super(name);
        this.size = size;
        this.text = text;
        this.value = "";
    }
}

export {TextfieldModule};