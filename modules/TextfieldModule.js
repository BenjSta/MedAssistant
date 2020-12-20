class TextfieldModule extends Module {
    constructor(name, size, text) {
        super(name);
        this.size = size;
        this.text = text;
        this.value = "";
    }
}
