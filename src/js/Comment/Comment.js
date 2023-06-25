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