//GET

const listaClientes = () => {
    fetch("http://localhost:3000/cliente")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST 

/*const crearCliente = async (nombre, correo, contrasena) => {
    try{
        const respuesta = await fetch("http://localhost:3000/cliente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                correo,
                contrasena
            })
        });

        if(respuesta.ok){
            const data = await respuesta.json()
            console.log("cliente creado", data)
        }else{
            throw new Error("Nose pudo crear el cliente")
        }
    }catch(error){
        console.error("Error al crear a el cliente: ", error)
    }
}*/

const crearCliente = (nombre, correo, contrasena) => {
    return fetch("http://localhost:3000/cliente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            correo,
            contrasena
        })       
    })
}



export const clienteServicios = {
    listaClientes,
    crearCliente
}