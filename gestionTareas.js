// ------------------- CLASES -------------------

class Tarea {
    constructor(id, titulo, descripcion, completada = false) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
    }

    mostrarDetalles() {
        console.log(`${this.id} - ${this.titulo}: ${this.descripcion} - ${this.completada ? "Lista" : "Pendiente"}`);
    }
}

class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }

    marcarComoCompletada(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) tarea.completada = true;
    }

    mostrarTareas() {
        this.tareas.forEach(t => t.mostrarDetalles());
    }
}

// ------------------- INSTANCIAS Y DOM -------------------

const lista = new ListaTareas();

const formTarea = document.getElementById("formTarea");
const tituloInput = document.getElementById("titulo");
const descripcionInput = document.getElementById("descripcion");
const listaTareasDiv = document.getElementById("listaTareas");

// ------------------- FUNCIONES LOCALSTORAGE -------------------

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(lista.tareas));
}

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
        const data = JSON.parse(tareasGuardadas);
        data.forEach(item => {
            const tarea = new Tarea(item.id, item.titulo, item.descripcion, item.completada);
            lista.agregarTarea(tarea);
        });
    }
}

// ------------------- FUNCIONES DE RENDER -------------------

function renderizarTareas() {
    listaTareasDiv.innerHTML = "";

    if (lista.tareas.length === 0) {
        listaTareasDiv.textContent = "No hay tareas. ¡Agrega una nueva!";
        return;
    }

    lista.tareas.forEach(tarea => {
        const tareaDiv = document.createElement("div");
        tareaDiv.classList.add("tarea");
        if (tarea.completada) tareaDiv.classList.add("completada");

        tareaDiv.innerHTML = `
            <strong>${tarea.titulo}</strong>: ${tarea.descripcion}
            <button class="completar">✅</button>
            <button class="eliminar">🗑️</button>
        `;

        // Marcar como completada
        tareaDiv.querySelector(".completar").addEventListener("click", () => {
            lista.marcarComoCompletada(tarea.id);
            guardarTareas();
            renderizarTareas();
        });

        // Eliminar tarea
        tareaDiv.querySelector(".eliminar").addEventListener("click", () => {
            lista.eliminarTarea(tarea.id);
            guardarTareas();
            renderizarTareas();
        });

        listaTareasDiv.appendChild(tareaDiv);
    });

    guardarTareas();
}

// ------------------- EVENT LISTENER FORM -------------------

formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevaTarea = new Tarea(Date.now(), tituloInput.value, descripcionInput.value);
    lista.agregarTarea(nuevaTarea);
    guardarTareas();
    renderizarTareas();
    formTarea.reset();
});

// ------------------- CARGAR TAREAS INICIALES -------------------

cargarTareas();
renderizarTareas();
