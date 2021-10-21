//Importar Header
import NavBar from "./Components/NavBar"
//Import Footer
import Footer from "./Components/Footer"
import ItemListContainer from "./Components/ItemListContainer"

const App = () =>{
    return(
        //Esto es un fragmento
        <>
        <NavBar/>
        <ItemListContainer greeting="Bienvenida/o a EcommerceApp."/>
        <Footer/>
        </>
    )
}

//Exportar app
export default App