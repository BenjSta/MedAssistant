class GroupModule extends Module {
    constructor(name, modules, replacements) {
        super(name);
        this.modules = modules;
        this.replacements = replacements;
        this.collapsable = false;
        this.view_normal_button = false;
    }
}
