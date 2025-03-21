# Fusion Web
Esta aplicación combina varias funcionalidades en una sola plataforma web: una tienda de productos deportivos, una galería de imágenes y un pequeño portafolio.

## Características implementadas

### Página principal
- Diseño responsive con secciones informativas
- Navegación intuitiva a las diferentes secciones

### Catálogo de productos
- Listado de 15 productos deportivos con imágenes, precios y descuentos
- Búsqueda por texto para filtrar productos
- Filtro por rango de precios (mín/máx) con slider
- Botón para restablecer todos los filtros
- Aplicación de filtros solo al pulsar el botón "Aplicar"

### Galería de imágenes
- Integración con la API de Unsplash
- Búsqueda de imágenes por término
- Visualización de 12 imágenes por búsqueda
- Información del autor al pasar el ratón sobre la imagen

### Portafolio
- Muestra de proyectos con descripción
- Diseño con efecto hover en las tarjetas

## Aspectos técnicos

### Tecnologías utilizadas
- React 18 con React Router para la navegación
- Sass/SCSS para los estilos
- Estructura de componentes modulares
- Llamadas a API externa (Unsplash)
- Variables CSS/SCSS para mantener consistencia visual

### Estructura de archivos (generado con ayuda de IA)
```
mi-proyecto/
├── src/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Portfolio.jsx
│   │   ├── styles/
│   │   │   ├── main.scss
│   │   │   └── _variables.scss
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   └── productService.js
│   ├── App.jsx
│   └── main.jsx
```

## Detalles de diseño
- Paleta de colores coherente definida mediante variables Sass
- Componentes reutilizables con estilos consistentes
- Footer fijo en la parte inferior
- Efectos de hover en tarjetas y botones
- Sombreado y espaciado consistente en toda la aplicación
- Diseño responsive para diferentes tamaños de pantalla

## Cómo ejecutar el proyecto

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear archivo `.env` con tu clave de API de Unsplash:
   ```
   VITE_UNSPLASH_ACCESS_KEY=tu_clave_de_api
   ```
4. Iniciar el servidor de desarrollo: `npm run dev`


Desarrollado por Victor Jimenez Vaquero