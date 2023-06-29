# ctd-fe3-final

Examen Final de Frontend III - Camada 1

## Integrantes

- Lucas Gustavo Díaz
- Rony Romero Duque

---

## To Do

#### Setear

- [x] Clonar este proyecto...
- [x] Asignar Colaboración
- [x] Deployment en Vercel [ver publicado](https://dh-front3-final.vercel.app/)

#### Desarrollo

- [x] Paso 1: Creación de rutas
- [x] Paso 2: Creación de componentes para cada ruta
- [x] Paso 3: Implementación del Contexto Global
- [x] Paso 4: Consumir Contexto Global
- [x] Paso 4: Funcionalidad de destacados
- [x] Paso 6: Estilado de componentes clave

#### Funcionalidades

- [x] (4) páginas: Home, Contacto, Detalle de cada dentista, **Destacados**
- [x] La correcta navegacion entre las paginas
- [x] Presencia homogenea en todas las paginas del Navbar & Footer
- [x] Creación del Context
  - [x] Tema de colores para toda la app
  - [x] Información traída por la API
  - [x] Implementar el hook useReducer al Estado Global
- [x] Funcionalidad de destacados
  - [x] Cada card renderizada debe tener la opción de poder agregarse a destacados.
  - [x] Deberan guardar las cards destacadas en la sesión actual del localStorage
  - [x] Manejar dicho comportamiento con el hook useReducer
- [x] **Pag.1 Inicio Home** deberá mostrar un listado en forma de grilla de los dentistas devueltos por la API
  - [x] Deberá ser la página de inicio de la web.
  - [x] La grilla deberá mostrar una **Card** por cada dentista devuelto por la API.
  - [x] Cada dentista deberá contener `name` y `username`, un boton `ADD FAV` (al localStorage como fav) y un `link` que permita su navegacion a la pagina _dentist/:id_ en base al id del dentista.
  - [x] Cada Card debe integrar la funcionalidad de agregar a destacados
- [x] **Pag2. Contacto** Implementar un Form (validaciones pertinentes) que capture la información del usuario. Los campos:
  - [x] Nombre completo (con longitud mayor a 5)
  - [x] Email (con formato correcto de email)
  - [x] Mostrar por Consola datos Submitiados
  - [x] En caso de error mostrar: **Por favor verifique su información nuevamente**
  - [x] Una vez "enviado". Mensaje: **Gracias _[nombre usuario]_, te contactaremos cuando antes vía mail**
  - [x] Ocultar Errores al inicializar, mostrarlos ddespués de la interaccíon
- [x] **Pag.3 Detalle del dentista** Mostrar un detalle de un dentista individual de la API.
  - [x] Deberá estar en la ruta `/dentist/:id`.
  - [x] La página deberá indicar al menos la siguiente información:
    - [x] Nombre del personaje
    - [x] Email
    - [x] Telefono
    - [x] Sitio web
- [x] **Pag4. Destacados** Renderizar las **Cards** pertinentes a los dentistas destacados. Dicha información deberá estar almacenada dentro del localStorage del browser y ser consumida dentro de la pagina
  - [x] Se deberá estar en la ruta `/favs`.
- [x] **ESTILOS** En base al tema (claro / oscuro) consumido del contexto global, estilar las cuatro _Rutas_ de la App

## Resultado final

Video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta [public](/public/)

---

**Validaciones**

- Una validación para cada campor es suficiente, pueden ser "manuales" o con expreciones regulares. Lo importante es el correcto manejo de errores y submit.

**Funcionalidad de destacados**

- Se valorará funcionalidades extra a esta feature, como lo pueden ser el eliminar de destacadados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados.

## Funcionalidades

Ver [Funcionalidades](docs/funcionalidades.md).

## Desarrollo

Ver [Desarrollo](docs/desarrollo.md).

## API

La API a utilizar sera la siguiente:
`https://jsonplaceholder.typicode.com/users`

Y para cada dentista en especifico:
`https://jsonplaceholder.typicode.com/users/:id`

### Formato de Entrega

- No deberan cambiar los nombres ni ubicacion de las variables/componentes/context que vienen con el repo base

Se aceptará la entrega mediante la submisión de la URL de su repositorio clonado

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

Mucha suerte y éxitos!
