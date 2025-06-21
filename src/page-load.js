import createHomePage from "./pages/home"
import createAboutPage from "./pages/about";
import createMenuPage from "./pages/menu";

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
            createMenuPage();
            break
    }
}


