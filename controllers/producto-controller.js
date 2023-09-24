
const nuevoProducto = (name, imageUrl, price, id) => {
        const card = document.createElement("article")
         const contenido = `<article class="container__producto">
         <img src="${imageUrl}" alt="">
         <p class="name__product">${name}</p>
         <p class="price__product">${price}</p>
         <a href="../productos.html? id=${id}">Ver producto</a>
     </article>`

     card.innerHTML = contenido
     card.dataset.id = id

     return card
}

const productosContainer = document.querySelector('[data-product]')

const cargarProductos = async () => {
    try{
        const response = await fetch("http://localhost:3000/producto")

        if(!response.ok){
            throw new Error("Error al obtener los productos")
        }

        const productos = await response.json()

        productos.forEach((producto) => {
            const {name, imageUrl, price, id} = producto
            const card = nuevoProducto(name, imageUrl, price, id);
      productosContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

cargarProductos();
        
