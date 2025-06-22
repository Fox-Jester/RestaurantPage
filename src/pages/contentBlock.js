
const content = document.querySelector("#content");


export default class contentBlock{
    constructor(title, paragraph, main=false){
        this.title = title,
        this.paragraph = paragraph,
        this.main = main
    }

    create(){
            const div = document.createElement("div");
            div.classList.add("content-block");
            if(this.main){
                div.classList.add("main-block");
            }
    
            const mainTag = this.main ? document.createElement("h1") : document.createElement("h2");
            mainTag.textContent = this.title;
            div.appendChild(mainTag);
    
           
            const p = document.createElement("p");
            p.textContent = this.paragraph;
            div.appendChild(p);
         
    
            content.appendChild(div);
    }
}