class App{
 switcher;

 constructor(){
    this.api = new Api();
    this.api.getData().then(()=>{
        this.switcher = new Switcher();
        this.switch(0);
    });
    
 }

 switch(index){
    this.switcher.switch(this.api.data.videos, this, index)
 }
}

class Switcher{
    constructor(){
        this.cleaner = new Cleaner();
    }

    switch(data, app, index){
        this.clean("body");
        this.yubtub = new Yubtub(data, app, index, this);
    }

    clean(whereToClean){
        this.cleaner.clean(whereToClean);
    }
}

class Yubtub{
    constructor(data, app, index, switcher){
        this.data = data;
        this.app = app;
        this.switcher = switcher;
        this.renderer = new Renderer();
        this.main = new Main(data, index, this);
        this.header = new Header(data);
        this.aside = new Aside(data);
    }

}

class Main{
    constructor(data, index, Yub){
        this.data = data;
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList = "mainVId"
        this.htmlElement.id = "text"
        this.video = new Video(data, index);

        this.htmlElement.appendChild(this.video.htmlElement);
        Yub.renderer.render("body", this.htmlElement);
    }
}

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
        }
        else{
            this.vid.pause()
        }
    }
}

class Header{
    constructor(data){
        this.data = data;
    }
}

class Api{
    async getData(){
        await fetch("./src/json/data.json").then(response =>{
            return response.json();
            }).then(data =>{
                this.data = data;
            });
    }
}

class Cleaner{
    clean(whereToClean){
        document.querySelector(whereToClean).innerHTML = "";
    }
}

class Renderer{
    render(whereToRender, whatToRender){
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}
const app = new App();