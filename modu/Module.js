class Module {
    name;
    html_element;
    heading_element;
    body_element;
    level;

    constructor(yaml_object, html_parent_element, level) {
        this.name = yaml_object.name;

        this.level = level

        this.html_element = document.createElement('div');
        this.html_element.classList.add("module");
        html_parent_element.appendChild(this.html_element);
        this.body_element = document.createElement('div');
        this.body_element.classList.add('module-body')

        if (level === 0) {
            this.heading_element = document.createElement("a");
            this.heading_element.classList.add("pure-button");
            this.heading_element.classList.add("pure-button-heading");
            this.heading_element.classList.add("uppercase");
            this.heading_element.href = "#";
            this.heading_element.append(this.name);
            this.html_element.appendChild(this.heading_element);
            var self = this;
            this.heading_element.onclick = 
                function(){self.toggleHideShowBody();};  
        }
        else {
            this.heading_element = document.createElement("div");
            this.heading_element.classList.add("module-heading");
            this.heading_element.append(this.name);
            this.html_element.appendChild(this.heading_element);
        }
        this.html_element.appendChild(this.body_element);
    }
    toggleHideShowBody(){
        if (this.body_element.style.display === "none") {
            this.body_element.style.display = "block";
        } else {
            this.body_element.style.display = "none";
        }
    }
}

export { Module };

