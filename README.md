# Mapa Interactivo - Clair Obscur: Expedition 33

Este proyecto es una aplicación web que visualiza un mapa interactivo para el videojuego Clair Obscur: Expedition 33. Permite a los usuarios explorar ubicaciones, encontrar ítems, jefes y puntos de interés mediante una interfaz de mapa navegable.

## Descripción

La herramienta procesa datos geográficos del juego y los renderiza utilizando Leaflet.js. El objetivo es proporcionar una guía visual fácil de usar para completar el juego al 100%, mostrando marcadores categorizados y detalles sobre cada ubicación.

## Características

- Navegación Interactiva: Mapa con zoom y desplazamiento fluido (configuración de tiles personalizada).
- Categorización: Los marcadores están organizados por categorías (Jefes, Tesoros, Ubicaciones, NPCs, etc.).
- Popups Informativos: Al hacer clic en un marcador, se muestra información detallada, imágenes y descripciones.
- Sistema de Comentarios: Incluye una simulación de "comentarios de la comunidad" y tips generados para cada tipo de marcador.
- Interfaz Reactiva: Diseño adaptado con barra lateral y barra de noticias (ticker).

## Tecnologías Utilizadas

- HTML5 & CSS3: Estructura y estilos (incluyendo fuentes Cinzel y Lato).
- JavaScript (ES6): Lógica de la aplicación y renderizado.
- Leaflet.js: Librería para la gestión del mapa interactivo.
- FontAwesome: Iconografía para la interfaz.

## Estructura del Proyecto

* index.html: Punto de entrada principal. Contiene la estructura DOM y la importación de estilos/scripts.
* app.js: Contiene la lógica principal, configuración del mapa (CONFIG), manejo de eventos y renderizado de marcadores.
* data.js: Contiene la base de datos (MAP_DATA) con toda la información de las ubicaciones, coordenadas y metadatos.
