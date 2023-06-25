class Aside{
    constructor(data, index, Yub){
        this.Yub = Yub;
        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList = "next";
        this.nextVid = new NextVid(data, index, this)
        Yub.renderer.render("body", this.htmlElement);
    }
}