class GroupModule extends Module {
    constructor(name, modules, replacements, parent) {
        super(name, 'GroupModuleGUI.html', parent);
        this.modules = modules;
        this.replacements = replacements;
        this.collapsable = false;
        this.view_normal_button = false;
    }
}
