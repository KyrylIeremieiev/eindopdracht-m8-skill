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