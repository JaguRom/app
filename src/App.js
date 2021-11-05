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
        <ItemCount stock="10"/>
        <Switch>
        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id"/>
        </Switch>
        <Route path="/item/:id">{<ItemDetailContainer/>}</Route> 
        <ItemDetailContainer/>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

//Exportar app
export default App


//route path=/categoria/:id
//        <ItemListContainer greeting="Bienvenida/o a EcommerceApp."/>