//1)Tiene que estar la variable React en scope-Es mas liviana
import React from "react"
//2)Tiene que estar la variable ReactDom en scope-Es mas pesada
import App from "./App"
//Importar ReactDom
import ReactDOM from "react-dom"
//Importar archivos css
import "./style.css"


//Import import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render ( <App/>, document.getElementById ("root") )