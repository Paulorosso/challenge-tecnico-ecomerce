# Challenge Técnico E-commerce

## Objetivo

Este proyecto es parte de un desafío técnico. A través de este ejercicio, se ha desarrollado una web app utilizando **Next.js** con el objetivo de demostrar habilidades en desarrollo frontend.

## Tecnologías utilizadas

- **Next.js**: Framework de React para desarrollo de aplicaciones web modernas, utilizado como base del proyecto.
- **App Router**: Para la gestión de rutas de la aplicación.
- **TailwindCSS**: Framework CSS de utilidad que facilita la creación de interfaces de usuario responsivas y de alta calidad.
- **TypeScript**: Lenguaje que extiende JavaScript añadiendo tipado estático.
- **React**: Biblioteca de JavaScript utilizada para construir la interfaz de usuario del proyecto.
- **npm**: Gestor de paquetes utilizado para instalar las dependencias.

## Funcionalidades

### Listado de Productos (PLP)

- Se renderiza en la raíz del proyecto.
- Permite realizar búsquedas por **SKU** o nombre del producto con un **debounce** de 500ms.
- Muestra un **loader** mientras se procesa la búsqueda.
- El resultado de búsqueda muestra:
  - Imagen del producto
  - Marca
  - Nombre
  - Precio
- Cada producto tiene un botón **Ver detalle** que redirige a la página de detalle del producto (PDP).

### Detalle de Producto (PDP)

- Se renderiza en la ruta `/products/:sku`.
- Muestra un **loader** mientras se carga la información.
- La interfaz incluye la siguiente información:
  - Marca
  - SKU
  - Imagen
  - Stock
  - Precio
  - Descripción
  - Categoría
- Se muestra el mensaje **"No encontrado"** si la API falla con un **404**.
- Se muestra el mensaje **"No se pudo cargar"** si la API falla con un **404**.

## Agregados adicionales

- **Componente Header**: Un componente común para todo el sitio.
- **Componente para ordenar productos**: Permite ordenar los productos por nombre y precio.
- **Formato de precios**: Los precios se formatean a la moneda de Perú.
- **Breadcrumbs**: Componente para navegar entre las categorías y productos.
- **Botón de agregar al carrito**: Limita la cantidad de unidades a la cantidad de stock disponible.
- **Notificaciones**: Un componente que muestra información cuando un producto es agregado al carrito.
- **Stock del producto**: Muestra la cantidad de unidades disponibles. Si hay solo una unidad, el texto cambia de "quedan" a "queda", y de "disponibles" a "disponible". Si no hay stock, se muestra un mensaje **"No Disponible"**.
- **Tabla de especificaciones**: Incluye detalles adicionales del producto, junto con su categoría.

## Despliegue

- **Vercel**: La web app se encuentra desplegada en [Vercel](https://challenge-tecnico-ecomerce.vercel.app/).

## Conclusión

Este proyecto ha sido una excelente oportunidad para aplicar mis habilidades en el desarrollo frontend utilizando tecnologías modernas como **Next.js**, **TailwindCSS**, y **TypeScript**.

## Contacto

Para más información sobre mi perfil profesional y otros proyectos, no dudes en contactarme a través de LinkedIn o explorar mi GitHub.

- **Frontend Developer**: [Tu Nombre]
- **LinkedIn**: [Tu perfil de LinkedIn](https://www.linkedin.com/in/paulodariorosso)