class SingleChoiceModule extends Module {
    constructor(name, options, text, normal_value) {
        super(name);
        this.options = options;
        this.text = text;
        this.normal_value = normal_value;
        this.value = "";
    }
}
