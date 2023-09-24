// GET

const listaProductos = () => {
    fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST

const crearProducto = async (imageUrl, name, price) => {
    try{
        const respuesta = await fetch("http://localhost:3000/producto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imageUrl,
                name,
                price
            })
        });

        if(respuesta.ok){
            const data = await respuesta.json()
            console.log("Producto creado", data)
        }else{
            throw new Error("Nose pudo crear el producto")
        }
    }catch(error){
        console.error("Error al crear el producto: ", error)
    }
}




export const productoServicios =  {
    listaProductos,
    crearProducto
}