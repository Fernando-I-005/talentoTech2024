// Contenedor donde se mostrarán las cards de las sucursales
const contenedorDisplaySucursal = document.querySelector('#contenedorDisplaySucursal');

// Estructura de ejemplo con los detalles de las sucursales
const sucursales = [
    {
        id: 1,
        nombre: "Casa Central Bs. As.",
        direccion: "Carpintero 500 - Villa Ventana - Bs.As.",
        horarios: "Lunes a viernes de 7:00 a 17:00 hs - Sábados de 7:00 a 12:00 hs",
        telefono: "0291-468-1515",
        email: "central@ferrecentro.com.ar",
        imagen: "../recursos/casaCentral960x960x72ppi.jpg",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.4487374745777!2d-61.93317022362112!3d-38.08321747190924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf2d6ef3ae07b%3A0x931088f85abd09c5!2sCarpintero%2C%20Villa%20Ventana%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1730218035703!5m2!1ses!2sar"
    },
    {
        id: 2,
        nombre: "Sucursal Cordoba",
        direccion: "Entre Rios 550 - Villa Maria - Córdoba",
        horarios: "Lunes a viernes de 8:30 a 17:30 hs - Sábados de 9:00 a 12:30 hs",
        telefono: "0353-453-1515",
        email: "villamaria@ferrecentro.com.ar",
        imagen: "../recursos/sucursall960x960x72ppi.jpg",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5664.324080380321!2d-63.24850489663693!3d-32.4184281777583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42e3d2815e89%3A0x44bf8af72dc1d34c!2zRW50cmUgUsOtb3MgNTUwLCBYNTkwMSBWaWxsYSBNYXLDrWEsIEPDs3Jkb2Jh!5e0!3m2!1ses!2sar!4v1730218257810!5m2!1ses!2sar"
    },
    {
        id: 3,
        nombre: "Sucursal Chubut",
        direccion: "Av. Los Notros 550 - Lago Puelo - Chubut",
        horarios: "Lunes a viernes de 9:00 a 20:30 hs",
        telefono: "0294-565-1515",
        email: "logopuelo@ferrecentro.com.ar",
        imagen: "../recursos/sucursalB960x960x72ppi.jpg",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.015096186568!2d-71.60589081051137!3d-42.06429579701988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bec9e63cc6393%3A0x6e6188b80dd84f18!2sAv.%20los%20Notros%20550%2C%20U9431%20Lago%20Puelo%2C%20Chubut!5e0!3m2!1ses!2sar!4v1730220192508!5m2!1ses!2sar"
    }
];

// Función que crea la card de la sucursal pasada como parámetro
function crearCard(sucursal) {
  // Limpiar el contenedor donde se van a insertar las cards
  let contenedorDisplaySucursal = document.getElementById('contenedorDisplaySucursal');
  contenedorDisplaySucursal.innerHTML = ''; // Eliminar cualquier contenido previo

  // Crear la card para la sucursal recibida como parámetro
  let contenedorIndividual = document.createElement('div');
  contenedorIndividual.classList.add('contenedorCard');

  contenedorIndividual.innerHTML = `
    <div class="card">
      <form onsubmit="addProduct()">
        <div class="contenedorDuplicado"  id="card-${sucursal.id}">
          <h2>${sucursal.nombre}</h2>
          <h3>${sucursal.direccion}</h3>
          <h3>${sucursal.horarios}</h3>
          <h3>${sucursal.telefono}</h3>
          <h3><a href="mailto:${sucursal.email}?subject=Consulta&body=Hola,%0A%0AQuisiera%20saber...">${sucursal.email}</a></h3>

         <div class="contenedorImagenes">
          <div class="contenedorImagen">
            <img class="imagenLocal" src="${sucursal.imagen}" alt="imagen fachada sucursal">
          </div>

          <div>
            <iframe class="mapa" src="${sucursal.mapa}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        </div>
        
      </form>
    </div>
  `;

  // Agregar la card al contenedor principal
  contenedorDisplaySucursal.appendChild(contenedorIndividual);
}

// Función que se ejecuta cuando se hace clic en cualquier botón de sucursal
function mostrarSucursal(idSucursal) {
  const sucursal = sucursales.find(s => s.id === idSucursal);
  
  // Llamar a la función para imprimir los nombres de las sucursales
  imprimirNombresSucursales();

  // Crear la card de la sucursal seleccionada
  crearCard(sucursal);
}

// Función que imprime los nombres de todas las sucursales
function imprimirNombresSucursales() {
  sucursales.forEach(sucursal => {
    console.log(sucursal.nombre);  // Imprime el nombre de cada sucursal
  });
}









/*

// Función para crear las cards de cada sucursal
function crearCard(sucursal) {
    return `
    <div class="contenedorDuplicadoxx" id="card-${sucursal.id}" style="display: none;">
        <h2>${sucursal.nombre}</h2>
        <h3>${sucursal.direccion}</h3>
        <h3>${sucursal.horarios}</h3>
        <h3>${sucursal.telefono}</h3>
        <h3><a href="mailto:${sucursal.email}?subject=Consulta&body=Hola,%0A%0AQuisiera%20saber...">${sucursal.email}</a></h3>

        <div class="contenedorImagenxx">
            <img class="imagenLocal" src="${sucursal.imagen}" alt="imagen fachada sucursal">
        </div>

        <section class="contenedorDuplicadoxx">
            <iframe class="mapa" src="${sucursal.mapa}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
    `;
}

// Añadir las cards al contenedor
function agregarCards() {
    sucursales.forEach(sucursal => {
        // Crear la card y agregarla al contenedor
        contenedorDisplaySucursal.innerHTML += crearCard(sucursal);
    });
}

// Evento para mostrar detalles de la sucursal al hacer clic en "Ver detalles"
document.querySelectorAll('.verDetallesBtn').forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Obtener el ID de la sucursal que corresponde al botón clickeado
        const idSucursal = e.target.parentElement.getAttribute('data-id');
        
        // Ocultar todas las cards primero
        document.querySelectorAll('.contenedorDuplicado').forEach(card => {
            card.style.display = 'none';
        });

        // Mostrar la card de la sucursal correspondiente
        const card = document.querySelector(`#card-${idSucursal}`);
        card.style.display = 'block';
    });
});

// Cargar las cards al inicio
agregarCards();
*/