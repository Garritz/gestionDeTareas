# gestionDeTareas
Evaluación de módulo M4

## Objetivo general
Desarrollar un sistema de gestión de tareas utilizando programación orientada a objetos (POO) en JavaScript. El sistema debe hacer uso de conceptos de ES6+, manipular el DOM, realizar solicitudes asíncronas utilizando la API fetch, y consumir una API externa para manejar y actualizar tareas. El alumno debe entregar un archivo .js que contenga el código necesario para implementar el sistema.

## Descripción del reto
Construir un sistema de gestión de tareas en el que los usuarios puedan agregar, editar, eliminar y ver tareas. El sistema debe interactuar con una API externa para almacenar y recuperar las tareas. Se debe hacer uso de la programación orientada a objetos, funcionalidades de ES6+, manejo del DOM y programación asíncrona para resolver este problema. El alumno deberá implementar las funciones de interacción con el sistema de tareas usando el objeto fetch o XHR para consumir datos de una API externa de tareas.

## Fases de desarrollo

### Fase 1: Configuración de clases y objetos

Crear una clase Tarea con las siguientes propiedades:

id (número)
titulo (string)
descripcion (string)
completada (boolean)

Implementar un método en la clase Tarea llamado mostrarDetalles(), que imprima por consola los detalles de la tarea.

Crear una clase ListaTareas que contenga un arreglo tareas y métodos como:

agregarTarea(tarea): para agregar una nueva tarea a la lista.
eliminarTarea(id): para eliminar una tarea por su ID.
marcarComoCompletada(id): para marcar una tarea como completada.
mostrarTareas(): para mostrar todas las tareas en consola.

### Fase 2: Interacción con el DOM y manejo de eventos

Crear un archivo HTML con los siguientes elementos:

Un formulario para agregar tareas con campos titulo y descripcion.
Un contenedor para mostrar las tareas (lista).
Botones para eliminar y marcar tareas como completadas.
Utilizar JavaScript para manipular estos elementos del DOM.
Agregar event listeners a los botones de la interfaz, para que al hacer clic en ellos, se ejecuten las funciones correspondientes (como agregar, eliminar y marcar tareas).

### Fase 3: Consumo de API externa con fetch o XHR

Utilizar la API fetch para hacer solicitudes a una API externa que gestione tareas (por ejemplo, la API de JSONPlaceholder o cualquier otra API de tareas disponible).

Realizar una solicitud GET para obtener las tareas.
Realizar una solicitud POST para agregar una nueva tarea a la base de datos externa.
Realizar una solicitud PUT para actualizar el estado de la tarea (marcar como completada).
Realizar una solicitud DELETE para eliminar una tarea de la base de datos externa.
Las respuestas de la API deben procesarse de manera asíncrona utilizando async/await o then/catch.

### Fase 4: Integración y pruebas

Al cargar la página, las tareas deben cargarse desde la API externa y mostrarse en la interfaz.
Los usuarios deben poder agregar nuevas tareas mediante el formulario.
Las tareas deben poder marcarse como completadas y reflejar estos cambios tanto en la interfaz como en la base de datos externa.
Debe existir la opción de eliminar tareas, y estas deben eliminarse tanto de la interfaz como de la base de datos externa.

### Fase 5: Código limpio y buenas prácticas

El código debe estar organizado en clases y funciones bien definidas.
Debe seguirse una estructura coherente y una adecuada separación de responsabilidades.
El código debe ser comentado para describir las funciones principales y los métodos dentro de las clases.
Deben evitarse variables globales innecesarias y se deben seguir las convenciones del lenguaje.
Entregable
El alumno debe entregar un archivo llamado gestionTareas.js que contenga todo el código necesario para la implementación del sistema. Este código debe ser ejecutable desde un entorno de JavaScript en el navegador o Node.js, según lo indicado. Además, debe entregarse un archivo index.html con la estructura básica de la interfaz de usuario.