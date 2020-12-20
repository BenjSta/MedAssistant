class Module {
    constructor(name) {
        this.name = name;
        this.template_file = null;
    }
    render(target_element){
        template = $.get(this.template_file);
        html = Mustache.render(template, this);
        target_element.append(html);
    }
}

