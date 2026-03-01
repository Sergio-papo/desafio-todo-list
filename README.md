TODO LIST (lista de tareas) – Desafio 5

ESTRUCTURA DEL PROYECTO
desafio-todo-list

── index.html
── README.md
── assets
    ── css
       ── style.css
    ── js
        ── script.js

LÓGICA DEL PROYECTO
Las tareas se almacenan en un arreglo de objetos con la siguiente estructura:
  id: Number,
  descripcion: String,
  completado: Boolean

Cada vez que se agrega, elimina o modifica una tarea:
1.	Se actualiza el arreglo.
2.	Se vuelve a renderizar la lista.
3.	Se actualiza el resumen.

ESTILO
Cuando una tarea está completada:
•	Se aplica la clase completada al <li>
•	El texto se muestra tachado y en color gris

