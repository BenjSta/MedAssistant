class Module {
    constructor(name, template_file, parent) {
        this.name = name;
        this.template_file = template_file;
        this.parent = parent;
    }
    render(){
        template_string = $.get(this.template_file);
        html_string = Mustache.render(template_string, this);
        this.parent.append(html_string);
    }
}

