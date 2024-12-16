document.addEventListener("DOMContentLoaded", function () {
    // Array de productos
    const productos = [
        
        {
    "id": 1,
    "codigo": "PIN0001",
    "nombre": "Pistola pulverizadora",
    "descripcionCorta": "Herramienta pintor",
    "descripcionLarga": "Pistola pulverizadora 3M para aplicación eficiente de pintura.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 90000.00,
    "imagen": "../recursos/productos/pintureria/pintura1-600x600.png",
    "marca": "3M",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 2,
    "codigo": "PIN0002",
    "nombre": "Pintura asfáltica 1kg",
    "descripcionCorta": "Pintura protectora",
    "descripcionLarga": "Pintura asfáltica aluminizada Megaflex, ideal para techos y superficies.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 55400.00,
    "imagen": "../recursos/productos/pintureria/pintura2-600x600.png",
    "marca": "Megaflex",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 3,
    "codigo": "PIN0003",
    "nombre": "Bandeja pintor",
    "descripcionCorta": "Bandeja para pintar",
    "descripcionLarga": "Bandeja para pintura Rasta, ideal para usar con rodillos o pinceles.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 8660.50,
    "imagen": "../recursos/productos/pintureria/pintura3-600x600.png",
    "marca": "Rasta",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 4,
    "codigo": "PIN0004",
    "nombre": "Esmalte aerosol 400ml",
    "descripcionCorta": "Esmalte en aerosol",
    "descripcionLarga": "Esmalte en aerosol 7cf, ideal para uso en metal y superficies variadas.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 4250.00,
    "imagen": "../recursos/productos/pintureria/pintura4-600x600.png",
    "marca": "7cf",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 5,
    "codigo": "PIN0005",
    "nombre": "Esmalte sintético aerosol 290ml",
    "descripcionCorta": "Esmalte en aerosol",
    "descripcionLarga": "Esmalte sintético en aerosol Colorin para acabados duraderos.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 4000.00,
    "imagen": "../recursos/productos/pintureria/pintura5-600x600.png",
    "marca": "Colorin",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 6,
    "codigo": "PIN0006",
    "nombre": "Esmalte aerosol 400ml",
    "descripcionCorta": "Esmalte rápido",
    "descripcionLarga": "Esmalte en aerosol Stretch, fácil aplicación y acabado de calidad.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio":6350.99,
    "imagen": "../recursos/productos/pintureria/pintura6-600x600.png",
    "marca": "Stretch",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 7,
    "codigo": "PIN0007",
    "nombre": "Mini rodillo fibra epoxi n°11",
    "descripcionCorta": "Rodillo fibra epoxi",
    "descripcionLarga": "Mini rodillo Galgo de fibra epoxi, perfecto para superficies pequeñas.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 12500.00,
    "imagen": "../recursos/productos/pintureria/pintura7-600x600.png",
    "marca": "Galgo",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 8,
    "codigo": "PIN0008",
    "nombre": "Podillo antigotas poliéster",
    "descripcionCorta": "Podillo antigotas",
    "descripcionLarga": "Podillo antigotas Galgo 100% poliéster, para evitar derrames de pintura.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 19900.90,
    "imagen": "../recursos/productos/pintureria/pintura8-600x600.png",
    "marca": "Galgo",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 9,
    "codigo": "PIN0009",
    "nombre": "Pintura bloqueador 4lt",
    "descripcionCorta": "Pintura bloqueadora",
    "descripcionLarga": "Pintura bloqueadora de manchas Shermin Williams, 4lt para grandes superficies.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 34500.00,
    "imagen": "../recursos/productos/pintureria/pintura9-600x600.png",
    "marca": "Shermin Williams",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 10,
    "codigo": "PIN0010",
    "nombre": "Pincel 50mm",
    "descripcionCorta": "Pincel de calidad",
    "descripcionLarga": "Pincel Gulberg de 50mm, ideal para trabajos de pintura detallados.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio":8500.00,
    "imagen": "../recursos/productos/pintureria/pintura10-600x600.png",
    "marca": "Gulberg",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 11,
    "codigo": "PIN0011",
    "nombre": "Pincel 25mm",
    "descripcionCorta": "Pincel fino",
    "descripcionLarga": "Pincel Kson 25mm, perfecto para detalles y acabados finos.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 9350.99,
    "imagen": "../recursos/productos/pintureria/pintura11-600x600.png",
    "marca": "Kson",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 12,
    "codigo": "PIN0012",
    "nombre": "Pintura alta temp. 4lt",
    "descripcionCorta": "Pintura resistente",
    "descripcionLarga": "Pintura Alba para altas temperaturas, ideal para metal y superficies expuestas.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 54500.00,
    "imagen": "../recursos/productos/pintureria/pintura12-600x600.png",
    "marca": "Alba",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 13,
    "codigo": "PIN0013",
    "nombre": "Pintura para pisos",
    "descripcionCorta": "Pintura para pisos",
    "descripcionLarga": "Pintura para pisos Liquitech, de alta resistencia para exteriores e interiores.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 92630.00,
    "imagen": "../recursos/productos/pintureria/pintura13-600x600.png",
    "marca": "Liquitech",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 14,
    "codigo": "PIN0014",
    "nombre": "Pintura para llantas",
    "descripcionCorta": "Pintura para llantas",
    "descripcionLarga": "Pintura Imperar para llantas, resistente y duradera para vehículos.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 115000.00,
    "imagen": "../recursos/productos/pintureria/pintura14-600x600.png",
    "marca": "Imperar",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 15,
    "codigo": "PIN0015",
    "nombre": "Pintura impermeabilizante 1lt",
    "descripcionCorta": "Pintura impermeable",
    "descripcionLarga": "Pintura Aquastop 1lt para impermeabilizar superficies exteriores.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 215000.00,
    "imagen": "../recursos/productos/pintureria/pintura15-600x600.png",
    "marca": "Aquastop",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 16,
    "codigo": "PIN0016",
    "nombre": "Removedor líquido 4lt",
    "descripcionCorta": "Removedor pintura",
    "descripcionLarga": "Removedor líquido Merclin 4lt, perfecto para remover pinturas viejas.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 88600.00,
    "imagen": "../recursos/productos/pintureria/pintura16-600x600.png",
    "marca": "Merclin",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 17,
    "codigo": "PIN0017",
    "nombre": "Esmalte sintético 3 en 1",
    "descripcionCorta": "Esmalte 3 en 1",
    "descripcionLarga": "Esmalte Vitreaux sintético 3 en 1, adecuado para interior y exterior.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 35000.00,
    "imagen": "../recursos/productos/pintureria/pintura17-600x600.png",
    "marca": "Vitreaux",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 18,
    "codigo": "PIN0018",
    "nombre": "Pintura cielos antihongos",
    "descripcionCorta": "Pintura cielos",
    "descripcionLarga": "Pintura Casablanca antihongos para cielos razos, ideal para interiores.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 32666.00,
    "imagen": "../recursos/productos/pintureria/pintura18-600x600.png",
    "marca": "Casablanca",
    "disponibilidad": true,
    "descuento": 0
  },
  {
    "id": 19,
    "codigo": "PIN0019",
    "nombre": "Latex interior exterior 20lt",
    "descripcionCorta": "Latex 20lt",
    "descripcionLarga": "Latex Llana 20lt, ideal para pintar interiores y exteriores.",
    "categoria": "Pintureria",
    "subcategoria": "standard",
    "mostrar": true,
    "precio": 160800.00,
    "imagen": "../recursos/productos/pintureria/pintura19-600x600.png",
    "marca": "Llana",
    "disponibilidad": true,
    "descuento": 0
  }
        
    ];

    // Función para crear las cards dinámicamente
    function crearCards(productos) {
        const contenedorProductos = document.getElementById("contenedorProductos");

        // Verificar que el contenedor exista
        if (!contenedorProductos) {
            console.error("El contenedor con ID 'contenedorProductos' no existe.");
            return;
        }

        // Limpiar el contenedor antes de agregar las cards
        contenedorProductos.innerHTML = '';

        // Iterar sobre cada producto
        productos.forEach(producto => {
            if (producto.mostrar) {
                // Crear la card
                const card = document.createElement("div");
                card.classList.add("contenedorCard");

                // Crear la imagen
                const contenedorImagen = document.createElement("div");
                contenedorImagen.classList.add("contenedorImagen");
                const img = document.createElement("img");
                img.classList.add("imagenProducto");
                img.src = producto.imagen; // Asignar la imagen
                img.alt = `Imagen del producto ${producto.nombre}`;

                // Crear la descripción corta
                const descripcionCorta = document.createElement("p");
                descripcionCorta.classList.add("descripcionCorta");
                descripcionCorta.textContent = producto.nombre;

                contenedorImagen.appendChild(img);
                contenedorImagen.appendChild(descripcionCorta);

                // Crear la parte del precio
                const contenedorPrecio = document.createElement("div");
                contenedorPrecio.classList.add("contenedorPrecio");
                const precio = document.createElement("h3");
                precio.textContent = `$ ${producto.precio.toLocaleString()}`;
                contenedorPrecio.appendChild(precio);

                // Crear la descripción larga y el botón
                const contenedorDescripcion = document.createElement("div");
                contenedorDescripcion.classList.add("contenedorDescripcion");
                const descripcionLarga = document.createElement("p");
                descripcionLarga.classList.add("descripcionLarga");
                descripcionLarga.textContent = producto.descripcionLarga;

                const botonDetalles = document.createElement("button");
                botonDetalles.classList.add("masDetalles");
                botonDetalles.textContent = "Ver detalles";

                contenedorDescripcion.appendChild(descripcionLarga);
                contenedorDescripcion.appendChild(botonDetalles);

                // Crear el contenedor inferior (cantidad y botón AGREGAR)
                const contenedorInferior = document.createElement("div");
                contenedorInferior.classList.add("contenedorInferior");

                const inputCantidad = document.createElement("input");
                inputCantidad.classList.add("contenedorSelector");
                inputCantidad.type = "number";
                inputCantidad.value = "1";
                inputCantidad.min = "1";
                inputCantidad.max = "100";

                const botonAgregar = document.createElement("button");
                botonAgregar.classList.add("contenedorBoton");
                botonAgregar.textContent = "AGREGAR";
                botonAgregar.setAttribute("data-producto-id", producto.id);

                contenedorInferior.appendChild(inputCantidad);
                contenedorInferior.appendChild(botonAgregar);

                // Agregar todo al contenedor principal de la card
                card.appendChild(contenedorImagen);
                card.appendChild(contenedorPrecio);
                card.appendChild(contenedorDescripcion);
                card.appendChild(contenedorInferior);

                // Agregar la card al contenedor de productos
                contenedorProductos.appendChild(card);
            }
        });
    }

    // Llamar a la función para crear las cards
    crearCards(productos);
});
