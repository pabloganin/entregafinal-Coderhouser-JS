//Json para Red de intaladores

const tabla = document.querySelector("#lista-usuarios");

function cargarUsuarios() {
  fetch("./json/instaladores.json")
    .then((respuesta) => respuesta.json())
    .then((usuarios) => {
      usuarios.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.celular}</td>
                    <td>${usuario.ciudad}</td>
                `;
        tabla.appendChild(row);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarUsuarios();
