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
//Import Context
import CustomComponent from "./cartContext"


const App = () =>{
    return(
        //Esto es un fragmento
        <>
        <BrowserRouter>
        <CustomComponent>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route path="/itemDetail/:id" component={ItemDetailContainer}/>
        <Route path="/category/:categoryId" component={ItemListContainer}/>
        </Switch>
        <Footer/>
        </CustomComponent>
        </BrowserRouter> 
        </>
    )
}

//Exportar app
export default App


//route path=/categoria/:id
//        <ItemListContainer greeting="Bienvenida/o a EcommerceApp."/>