class Comments{
    constructor(data, index, main){
        this.data = data;
        this.index = index;
        this.main = main;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.classList = "comments";
        this.comment = new Comment(data[index].comment, this);
        this.main.htmlElement.appendChild(this.htmlElement);
        this.inupt = new Inupt(this);
        
    }

    render(whatToRender){
        this.htmlElement.appendChild(whatToRender);
    }
}