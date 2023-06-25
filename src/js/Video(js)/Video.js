class Video{
    constructor(data, index){
        this.data = data;
        this.index = index;
        this.createHtml();
        this.vid.play();
        this.addPanelOption();
    }

    createHtml(){
        this.WrappedIframeOne = document.createElement("i");
        this.WrappedIframeOne.classList = "fa-solid fa-star";
        this.WrappedIframeTwo = document.createElement("i");
        this.WrappedIframeTwo.classList = "fa-solid fa-arrow-right";

        this.WrappedBtnOne = document.createElement("btn");
        this.WrappedBtnOne.classList = "video__button";
        this.WrappedBtnTwo = document.createElement("btn");
        this.WrappedBtnTwo.classList = "video__button";

        this.WrappedBtnOne.appendChild(this.WrappedIframeOne);
        this.WrappedBtnTwo.appendChild(this.WrappedIframeTwo);
        
        this.wrapper = document.createElement("section");
        this.wrapper.classList = "wrapper";
        this.wrapper.appendChild(this.WrappedBtnOne);
        this.wrapper.appendChild(this.WrappedBtnTwo);

        this.Iframe = document.createElement("i");
        this.Iframe.classList = "fa-solid fa-play";

        this.btn = document.createElement("btn");
        this.btn.classList = "video__button";
        this.btn.appendChild(this.Iframe);

        this.panel = document.createElement("figcaption");
        this.panel.classList = "video__panel";
        this.panel.appendChild(this.btn);
        this.panel.appendChild(this.wrapper);

        this.vid = document.createElement("video");
        this.vid.classList = "video__vid";
        this.vid.src = this.data[this.index].url;

        this.htmlElement = document.createElement("figure");
        this.htmlElement.classList = "video";

        this.htmlElement.appendChild(this.vid);
        this.htmlElement.appendChild(this.panel);
    }

    addPanelOption(){
        this.btn.onclick = this.pause;
    }

    pause = () =>{
        if(this.vid.paused == true){
            this.vid.play();
            this.Iframe.classList = "fa-solid fa-pause";
        }
        else{
            this.vid.pause()
            this.Iframe.classList = "fa-solid fa-play";
        }
    }
}
