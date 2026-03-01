// se parte con 3 tareas
let tareas = [
  { id: 1, descripcion: "Hacer mercado", completado: false },
  { id: 2, descripcion: "Estudiar JavaScript", completado: true },
  { id: 3, descripcion: "Entrenar", completado: false }
];

// Referencias al DOM
let listaTareas = document.getElementById("listaTareas");
let totalTareas = document.getElementById("totalTareas");
let tareasRealizadas = document.getElementById("tareasRealizadas");
let input = document.getElementById("nuevaTarea");
let btnAgregar = document.getElementById("btnAgregar");


// renderizar las tareas
function renderTareas() {

  listaTareas.innerHTML = "";

  for (let tarea of tareas) {

    let claseLi = "";

    if (tarea.completado) {
      claseLi = "completada";
    }

    let checked = "";

    if (tarea.completado) {
      checked = "checked";
    }

    listaTareas.innerHTML += `
      <li class="${claseLi}">
        <span>
          ${tarea.id} - ${tarea.descripcion}
        </span>

        <div>
          <input type="checkbox" ${checked}
            onchange="toggleTarea(${tarea.id})">

          <button onclick="eliminarTarea(${tarea.id})">
            ❌
          </button>
        </div>
      </li>
    `;
  }

  actualizarResumen();
}


// agregar tarea
function agregarTarea() {

  if (input.value.trim() === "") {
    return;
  }

  let nuevaTarea = {
    id: Date.now(),
    descripcion: input.value,
    completado: false
  };

  tareas.push(nuevaTarea);

  input.value = "";

  renderTareas();
}


// eliminar tarea
function eliminarTarea(id) {

  tareas = tareas.filter(function(tarea) {
    return tarea.id !== id;
  });

  renderTareas();
}


// cambiar estado
function toggleTarea(id) {

  for (let tarea of tareas) {
    if (tarea.id === id) {
      tarea.completado = !tarea.completado;
    }
  }

  renderTareas();
}


// actualizar resumen
function actualizarResumen() {

  totalTareas.textContent = tareas.length;

  let contador = 0;

  for (let tarea of tareas) {
    if (tarea.completado) {
      contador++;
    }
  }

  tareasRealizadas.textContent = contador;
}


// botón agregar
btnAgregar.addEventListener("click", agregarTarea);


// inicial
renderTareas();