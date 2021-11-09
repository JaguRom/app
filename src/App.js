//Importar Header
import NavBar from "./Components/NavBar"
//Import Footer
import Footer from "./Components/Footer"
//Import ItemListContainer
import ItemListContainer from "./Components/ItemListContainer"
//Import ItemCount
import ItemCount from "./Components/ItemCount"
//Import ItemDetailContainer
import ItemDetailContainer from "./Components/ItemDetailContainer"
//BrowserRouter
import {BrowserRouter,Route, Switch} from "react-router-dom"
//import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min"

const App = () =>{
    return(
        //Esto es un fragmento
        <>
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route path="/itemDetail/:id" component={ItemDetailContainer}/>
        <Route path="/category/:categoryId" component={ItemListContainer}/>
        </Switch>
        <Footer/>
        </BrowserRouter> 
        </>
    )
}

//Exportar app
export default App


//route path=/categoria/:id
//        <ItemListContainer greeting="Bienvenida/o a EcommerceApp."/>