import { data } from "./data.js";


let datosAscendentes = data.slice();
let datosDescendentes = data.slice();

const container = document.querySelector("#container");

const tabla = document.createElement("table");

const tr = document.createElement("tr");

const thNombre = document.createElement("th");
const thApellido = document.createElement("th");
const thEdad = document.createElement("th");
const thEmail = document.createElement("th");
const thTelefono = document.createElement("th");

thNombre.textContent = "Nombre";
thApellido.textContent = "Apellido";
thEdad.textContent = "Edad";
thEmail.textContent = "Email";
thTelefono.textContent = "Telefono";

tabla.append(tr);

tr.appendChild(thNombre);
tr.appendChild(thApellido);
tr.appendChild(thEdad);
tr.appendChild(thEmail);
tr.appendChild(thTelefono);

datosAscendentes.sort(function (a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0;
});

datosDescendentes.sort(function (a, b) {
  if (b.nombre > a.nombre) {
    return 1;
  }
  if (b.nombre < a.nombre) {
    return -1;
  }
  return 0;
});

console.log(data);
console.log(datosAscendentes);
console.log(datosDescendentes)

var estado = 0;

function mostrarInformacion(datos) {
    tabla.innerHTML = "";

    const thNombre = document.createElement("th");
    const thApellido = document.createElement("th");
    const thEdad = document.createElement("th");
    const thEmail = document.createElement("th");
    const thTelefono = document.createElement("th");

    thNombre.textContent = "Nombre";
    thApellido.textContent = "Apellido";
    thEdad.textContent = "Edad";
    thEmail.textContent = "Email";
    thTelefono.textContent = "Telefono";

    tabla.append(tr);

    datos.forEach(dato => { 
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdEdad = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTelefono = document.createElement("td");

    tdNombre.textContent = dato.nombre;
    tdApellido.textContent = dato.apellidos;
    tdEdad.textContent = dato.edad;
    tdEmail.textContent = dato.email;
    tdTelefono.textContent = dato.telefono;

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEdad);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefono);

    tabla.appendChild(tr);
    
    });
}

mostrarInformacion(data);

thNombre.addEventListener("click", async() => {
    if (estado === 0) {
        estado = 1;
        await mostrarInformacion(datosAscendentes);
    } else if(estado === 1){
        estado = 2;
        await mostrarInformacion(datosDescendentes);
    } else if (estado === 2) {
        estado = 0;
        await mostrarInformacion(data);
    }
});

container.appendChild(tabla);



