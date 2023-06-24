class App{
 switcher;

 constructor(){
    this.api = new Api();
    this.api.getData().then(()=>{
        this.switcher = new Switcher(this);
        this.switch(0);
    });
    
 }

 switch(index){
    this.switcher.switch(this.api.data.videos, this, index)
 }
}

class Switcher{
    constructor(App){
        this.app = App
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
        this.aside = new Aside(data, index, this);
    }

}

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

class Inupt{
    constructor(comments){
        this.comments = comments;
        this.createHtml()
    }

    createHtml(){
        this.textArea = document.createElement("textarea");
        this.textArea.classList = "comments__input";
        this.textArea.placeholder = "Your Comment:";
        this.textArea.style.fontSize = "2rem";
        this.textArea.cols = 30;
        this.textArea.rows = 10;

        this.postBtn = document.createElement("button");
        this.postBtn.classList = "mainVid__btn";
        this.postBtn.innerText = "POST!";
        this.postBtn.onclick = this.post;

        this.comments.main.htmlElement.appendChild(this.textArea);
        this.comments.main.htmlElement.appendChild(this.postBtn);
    }

    post = ()=>{
        this.comment = new Comment(this.textArea.value, this.comments)
        this.textArea.value = "";
    }
}

class Comment{
    constructor(innerTxt, comments){
        this.comments = comments;
        this.createHtml(innerTxt);
    }

    createHtml(innerTxt){
        /* 
        <li class="comments__comment">
           <figure class="comments__user">
                <i class="fa-solid fa-user"></i>
            </figure>
            <p>It was lazy</p>
        </li> */

        this.Iframe = document.createElement("i");
        this.Iframe.classList = "fa-solid fa-user";

        this.user = document.createElement("figure");
        this.user.classList = "comments__user";
        this.user.appendChild(this.Iframe);

        this.p = document.createElement("p");
        this.p.innerText = innerTxt;
        
        this.li = document.createElement("li");
        this.li.classList = "comments__comment";
        this.li.appendChild(this.user);
        this.li.appendChild(this.p);

        this.comments.render(this.li)
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
            this.Iframe.classList = "fa-solid fa-pause";
        }
        else{
            this.vid.pause()
            this.Iframe.classList = "fa-solid fa-play";
        }
    }
}

class Aside{
    constructor(data, index, Yub){
        this.Yub = Yub;
        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList = "next";
        this.nextVid = new NextVid(data, index, this)
        Yub.renderer.render("body", this.htmlElement);
    }
}

class NextVid{
    constructor(data, index, aside){
        this.data = data;
        this.index = index;
        this.aside = aside;
        this.createHtml();
        this.createOnclick();
    }


    createHtml(){
        this.nextVideo = document.createElement("video");
        this.nextVideo.classList = "next__vid"
        this.nextVideo.src = this.data[this.data[this.index].nextInArr].url;
        this.aside.htmlElement.appendChild(this.nextVideo);
    }

    createOnclick(){
        this.nextVideo.onclick = this.onClick;
    }

    onClick = () =>{
        this.aside.Yub.switcher.app.switch(this.data[this.index].nextInArr)
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