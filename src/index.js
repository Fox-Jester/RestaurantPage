
import "./styles.css"
import fruits_bg from "./fruits_bg.webp"
import pageLoad from "./page-load"


const Website = {
    
    content: document.querySelector("#content"),
    currentPage: "home",

    buttons: {
         homeBtn: document.querySelector("#home-btn"),
         menuBtn: document.querySelector("#menu-btn"),
         aboutBtn: document.querySelector("#about-btn"),
        },
        
    applyBtnEL(){
            this.buttons.homeBtn.addEventListener("click", () => {
                this.handleClick("home")
            });

            this.buttons.menuBtn.addEventListener("click", () => {
                this.handleClick("menu")
            });
            this.buttons.aboutBtn.addEventListener("click", () => {
                this.handleClick("about")
            });
        },

    removeActiveClass(){
        const btns = [this.buttons.homeBtn, this.buttons.aboutBtn, this.buttons.menuBtn]
        btns.forEach((btn) => {
            if(btn.classList.contains("active")){
                btn.classList.remove("active");
            }
        })
    },
        
    handleClick(page){
            if(page !== this.currentPage){
                this.removeActiveClass()
                const currentBtn = document.querySelector(`#${page}-btn`);
                currentBtn.classList.add("active");
                this.currentPage = page;
                this.setPage()
            }
    
    },

    deleteContent(){

        const blocks = document.querySelectorAll(".content-block");
  
        if(blocks){
            blocks.forEach(block => block.remove());
        }
        
    },
    
    setPage(){
        this.deleteContent()
        pageLoad(this.currentPage);
    },

    createImg(){
        const img = document.createElement("img");
        img.classList.add("content-bg");
        img.src = fruits_bg;
        this.content.appendChild(img)
    },

 

    init(){
        this.createImg()
        this.applyBtnEL()
        this.setPage()
       
    }

  

};


Website.init()