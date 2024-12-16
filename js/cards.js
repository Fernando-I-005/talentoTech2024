// Seleccionar los contenedores de "destacados" y "más vendidos"
const contenedorDestacados = document.querySelector('#contenedorSwiperDestacados .swiper-wrapper');
const contenedorMasVendidos = document.querySelector('#contenedorSwiperMasVendidos .swiper-wrapper');

// Función para crear las cards dinámicamente
function crearCard(producto) {
    return `
        <div class="swiper-slide">
            
            <div class="contenedorCard1">
                <div class="contenedorImagen1">
                    <img class="imagenProducto1" src="${producto.imagen}" alt="${producto.nombre}">
                    <p class="descripcionCorta">${producto.descripcionCorta}</p>
                </div>
                <div class="contenedorPrecio1">
                    <h4>$ ${producto.precio.toLocaleString('es-AR')}</h4>
                </div>
                <div class="contenedorDescripcion1">
                    <p>${producto.descripcionLarga}</p>
                </div>
                <div class="contenedorInferior1">
                     <input class="contenedorSelector1" type="number" id="Number${producto.id}" name="cantidad" min="1" max="100" value="1" step="1">
                     <button class="contenedorBoton1" id="btnAgregar${producto.id}" data-id="${producto.id}">AGREGAR</button>
                </div>
            </div>
        </div>
    `;
}

// Obtener datos del archivo JSON
fetch('../datos/jsonProductos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(productos => {
        
        // Imprimir el JSON completo en la consola
        console.log("JSON completo:", productos);

        // Imprimir el producto en el índice 2 (si existe) en la consola
        if (productos[2]) {
            console.log("Producto en el índice 2:", productos[2]);
        } else {
            console.log("No hay producto en el índice 2.");
        }

        // Filtrar y agregar productos destacados
        productos
            .filter(producto => producto.subcategoria === "destacados" && producto.mostrar)
            .forEach(producto => {
                contenedorDestacados.innerHTML += crearCard(producto);
            });

        // Filtrar y agregar productos más vendidos
        productos
            .filter(producto => producto.subcategoria === "masVendidos" && producto.mostrar)
            .forEach(producto => {
                contenedorMasVendidos.innerHTML += crearCard(producto);
            });
    })
    .catch(error => {
        console.error('Hubo un problema con la carga del JSON:', error);
    });
