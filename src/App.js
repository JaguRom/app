//Importar Header
import NavBar from "./Components/NavBar"
//Import Footer
import Footer from "./Components/Footer"
//Import ItemListContainer
import ItemListContainer from "./Components/ItemListContainer"
//Import ItemCount
import ItemCount from "./Components/ItemCount"

const App = () =>{
    return(
        //Esto es un fragmento
        <>
        <NavBar/>
        <ItemCount stock="10"/>
        <ItemListContainer greeting="Bienvenida/o a EcommerceApp."/>
        <Footer/>
        </>
    )
}

//Exportar app
export default App