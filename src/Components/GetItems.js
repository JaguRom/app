import { firestore } from "../firebase" //acceder a la base de datos


const getItems = (id) => {
    const arrProducts = []
    const db = firestore;
    console.log("Firestore console logs")
console.log(arrProducts)
console.log(arrProducts[0])
console.log(arrProducts.id)
    const collection = db.collection("productos");
    if (id) {
        const query = collection.where("title", "==", id);
        console.log(collection)
        const promesa = query.get();
        return (
            promesa.then(resultados => {
                resultados.forEach(resultado => {
                    arrProducts.push(
                        {
                            id: resultado.id,
                            ...resultado.data()
                        }
                    )
                })
                return arrProducts;
            })
        )
    }
    else {
        const promesa = collection.get();
        return (
            promesa.then(resultados => {
                resultados.forEach(resultado => {
                    arrProducts.push(
                        {
                            id: resultado.id,
                            ...resultado.data()
                        }
                    )
                })
                return arrProducts;
            })
        )
    }

}

export default getItems