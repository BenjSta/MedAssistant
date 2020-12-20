class ChoiceModule extends Module {
    constructor(name, options, text, multiple) {
        super(name);
        this.options = options;
        this.text = text;
        this.multiple = multiple;
    }
}
