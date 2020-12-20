class Module {
    constructor(name, template_file, parent_element) {
        this.name = name;
        this.template_file = template_file;
        this.parent_element = parent_element;
    }
    render(){
		var module_obj = this;
		$.get(this.template_file, function(template_string){
			var html_string = Mustache.render(template_string, module_obj);
			module_obj.parent_element.append(html_string);
		});
    }
}

export {Module};

