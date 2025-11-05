# Aplicación de Rick and Morty con Ionic

Esta es una aplicación móvil híbrida desarrollada con Ionic Framework que consume la API pública de Rick and Morty para mostrar una lista de personajes.

## Descripción

La aplicación muestra un listado de personajes de la serie Rick and Morty, obteniendo los datos de [https://rickandmortyapi.com/](https://rickandmortyapi.com/). Incluye la imagen, nombre, especie, estado, género y origen de cada personaje.

## Características

-   Listado de personajes con scroll infinito.
-   Consumo de una API REST (Rick and Morty API).
-   Interfaz de usuario construida con componentes de Ionic.
-   Manejo de estados de carga y errores.
-   Diseño responsivo.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

-   [Node.js](https://nodejs.org/) (versión LTS recomendada)
-   [npm](https://www.npmjs.com/) (se instala junto con Node.js)
-   [Ionic CLI](https://ionicframework.com/docs/cli)

Puedes instalar Ionic CLI globalmente con el siguiente comando:
```bash
npm install -g @ionic/cli
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1.  **Clona el repositorio** (o descomprime el archivo del proyecto).

2.  **Navega al directorio del proyecto**:
    ```bash
    cd APIRickMorty
    ```

3.  **Instala las dependencias**:
    Ejecuta el siguiente comando para instalar todas las dependencias necesarias definidas en el archivo `package.json`.
    ```bash
    npm install
    ```

## Ejecución de la Aplicación

Para iniciar la aplicación en un servidor de desarrollo local, ejecuta el siguiente comando. La aplicación se abrirá automáticamente en tu navegador web.

```bash
ionic serve
```

La aplicación estará disponible en `http://localhost:8100`.

## Tecnologías Utilizadas

-   **Ionic Framework**: Framework para el desarrollo de aplicaciones móviles híbridas.
-   **Angular**: Plataforma para construir aplicaciones web.
-   **TypeScript**: Superset de JavaScript que añade tipado estático.
-   **API de Rick and Morty**: API pública para obtener datos de la serie.
