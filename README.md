# ctd-fe3-final

Examen Final de Frontend III - Camada 1

## Integrantes

- Lucas Gustavo Díaz
- Rony Romero Duque

***

## To Do

#### Setear
- [X] Clonar este proyecto...
- [X] Asignar Colaboración
#### Desarrollo
- [ ] Paso 1: Creación de rutas
- [ ] Paso 2: Creación de componentes para cada ruta
- [ ] Paso 3: Implementación del Contexto Global
- [ ] Paso 4: Consumir Contexto Global
- [ ] Paso 4: Funcionalidad de destacados
- [ ] Paso 6: Estilado de componentes clave
#### Funcionalidades
- [ ] (4) páginas: Home, Contacto, Detalle de cada dentista, Destacados
- [ ] La correcta navegacion entre las paginas
- [ ] Presencia homogenea en todas las paginas del Navbar & Footer
- [ ] Creación del Context
    - [ ] Tema de colores para toda la app
    - [ ] Información traída por la API
    - [ ] Implementar el hook useReducer al Estado Global
- [ ] Funcionalidad de destacados
    - [ ] Cada card renderizada debe tener la opción de poder agregarse a destacados.
    - [ ] Deberan guardar las cards destacadas en la sesión actual del localStorage
    - [ ] Manejar dicho comportamiento con el hook useReducer
- [ ] **Pag.1  Inicio Home** deberá mostrar un listado en forma de grilla de los dentistas devueltos por la API
    - [ ] Deberá ser la página de inicio de la web.
    - [ ] La grilla deberá mostrar una **Card** por cada dentista devuelto por la API.
    - [ ] Cada dentista deberá contener `name` y `username`, un boton `ADD FAV` (al localStorage como fav) y un `link` que permita su navegacion a la pagina _dentist/:id_ en base al id del dentista.
    - [ ] Cada Card debe integrar la funcionalidad de agregar a destacados
- [ ] **Pag2. Contacto** Implementar un Form (validaciones pertinentes) que capture la información del usuario. Los campos:
    - [ ] Nombre completo (con longitud mayor a 5)
    - [ ] Email (con formato correcto de email)
    - [ ] En caso de error mostrar: **Por favor verifique su información nuevamente**
    - [ ] Una vez "enviado". Mensaje: **Gracias _[nombre usuario]_, te contactaremos cuando antes vía mail**
- [ ] **Pag.3  Detalle del dentista** Mostrar un detalle de un dentista individual de la API.
  - [ ] Deberá estar en la ruta `/dentist/:id`.
  - [ ] La página deberá indicar al menos la siguiente información:
    - [ ] Nombre del personaje
    - [ ] Email
    - [ ] Telefono
    - [ ] Sitio web
- [ ] **Pag4. Destacados** Renderizar las **Cards** pertinentes a los dentistas destacados. Dicha información deberá estar almacenada dentro del localStorage del browser y ser consumida dentro de la pagina
    - [ ] Se deberá estar en la ruta `/favs`.

- [ ] **ESTILOS** En base al tema (claro / oscuro) consumido del contexto global, estilar las cuatro *Rutas* de la App

## Resultado final

Video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta [public](/public/)

***

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
