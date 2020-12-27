class Module {
    constructor(name, template_file, html_parent_element) {
        this.name = name;
        this.template_file = template_file;
        
        this.html_element = document.createElement('div');
        this.html_element.setAttribute("class", "ribbon");
        html_parent_element.appendChild(this.html_element);

        this.heading_button = document.createElement("a");
        this.heading_button.setAttribute("class", "pure-button pure-button-primary");
        this.heading_button.setAttribute("href", "#");
        this.heading_button.append(this.name);
        this.html_element.appendChild(this.heading_button);
        /*$.get(this.template_file, function(template_string){
          var html_string = Mustache.render(template_string, module_obj);
          module_obj.html_element.innerHTML += html_string;
          module_obj.is_rendered = true;
        });*/
    }
}

export {Module};

