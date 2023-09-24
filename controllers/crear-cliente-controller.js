import { clienteServicios } from "../servicios/cliente--servicios.js";

const formCliente = document.querySelector('[data-form]')

formCliente.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nombre = document.querySelector('[data-nombre]').value
    const email = document.querySelector('[data-email]').value
    const contrasena = document.querySelector('[data-pasword]').value

    clienteServicios.crearCliente(nombre, email, contrasena)
    .then(respuesta => {
        console.log("Registro exitoso", respuesta)
        alert("REGISTRO EXITOSO¡¡¡")
        //alert("Agregado con exito")
        //window.location.href = "../screens/index.html"
    }).catch(error => {
        console.log("NO SE PUDO CREAR", error)
    })
    
})