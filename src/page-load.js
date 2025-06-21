import createHomePage from "./pages/home"
import createAboutPage from "./pages/about";


export default function pageLoad(page){
    console.log(page)
    switch(page){
        case "home":
            createHomePage();
            break;
        case "about":
            createAboutPage();
            break;
        
        case "menu":
        
            break
    }
}


