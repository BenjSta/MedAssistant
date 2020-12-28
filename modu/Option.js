class Option{
    normal_checked;
    checked;
    text;
    radio_siblings;
    checkbox;

    constructor(name, text, normal_checked, html_parent_element, 
                radio_siblings) {
        this.name = name;
        this.text = text;
        this.normal_checked = normal_checked;
        this.checked = false;
        this.radio_siblings = radio_siblings;

        var label = document.createElement('label');
        this.checkbox = document.createElement('input');
        this.checkbox.type = "checkbox";
        label.appendChild(this.checkbox);
        label.append(this.name)
        html_parent_element.appendChild(label);

        var self = this;
        this.checkbox.onclick = function(){
            var checked_update = !self.checked;
            for (let sibling of self.radio_siblings){
                sibling.checkbox.checked = false;
                sibling.checked = sibling.checkbox.checked;
            }
            self.checked = checked_update;
            self.checkbox.checked = checked_update;
        };
    }
}
export {Option}
