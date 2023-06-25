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