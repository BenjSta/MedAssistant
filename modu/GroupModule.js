import {Module} from "/MedAssistant/modu/Module.js";

class GroupModule extends Module {
    children;
    replacements;
    collapsable;
    view_normal_button;
    child_area;


    constructor(name, html_parent_element) {
        super(name, "/MedAssistant/modu/GroupModuleGUI.template.html", 
            html_parent_element);
        this.children = [];
        this.replacements = [];
        this.collapsable = false;
        this.view_normal_button = false;

        this.child_area = document.createElement('div');
        console.log(this.child_area);
        this.html_element.appendChild(this.child_area);
        
        var self = this;
        this.heading_button.onclick = 
            function(){self.toggleHideShowChildren();};
    }

    toggleHideShowChildren(){
        if (this.child_area.style.display === "none") {
            this.child_area.style.display = "block";
        } else {
            this.child_area.style.display = "none";
        }
    }
}

export {GroupModule};
