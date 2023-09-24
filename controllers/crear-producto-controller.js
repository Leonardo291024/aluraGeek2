import { productoServicios } from "../servicios/producto--servicios.js"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const nombre = document.querySelector('[data-nombre]').value
    const precio = document.querySelector('[data-precio]').value

    productoServicios.crearProducto(url, nombre, precio)
    .then(respuesta => {
        //console.log("agregado con exito", respuesta)
        //alert("Agregado con exito")
        window.location.href = "../screens/index.html"
    }).catch(error => {
        console.log("NO SE PUDO CREAR", error)
    })
})
