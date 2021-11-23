import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../cartContext';
import {useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ItemDetail = ({productos}) => {
/*     console.log(productos);
    console.log(productos.length);  
    console.log(productos[0].description);   
    console.log(productos[0].title); */

    const {push}= useHistory();
    const {addToCart} = useContext(CartContext);
    const [mostrar, setMostrar] = useState(false);

    const onAdd = (cantidadSeleccionada)=> {
        console.log('Enviado al carrito')
        console.log(cantidadSeleccionada);
        /* Push agrega cantidad y product al carrito del contexto antes de redireccionar */
        addToCart(productos[0], cantidadSeleccionada);
        setMostrar(!mostrar)
    }

    const redireccionar = () => {
        push("/cart")
    }

    return (
        <div className="item-detail" key={productos[0].id} id={productos[0].id}>
            <div className="item-detail__image">
                <img src={productos[0].img} alt={productos[0].title}/>
            </div>
            <div className="item-detail__info">
                <h2 className="item-detail__title">{productos[0].title}</h2>
                <p className="item-detail__description">{productos[0].description}</p>
                <ItemCount stock={4} onAdd={onAdd}/>
            </div>
            {mostrar && <button onClick={redireccionar}> Ver Carrito</button>}
        </div>
    )
}

export default ItemDetail