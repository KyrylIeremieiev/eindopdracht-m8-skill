class Main{
    constructor(data, index, Yub){
        this.data = data;
        this.Yub = Yub;
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList = "mainVId"
        this.htmlElement.id = "text"
        this.video = new Video(data, index);
        this.htmlElement.appendChild(this.video.htmlElement);
        this.comments = new Comments(data, index, this);


        this.Yub.renderer.render("body", this.htmlElement);
    }
}