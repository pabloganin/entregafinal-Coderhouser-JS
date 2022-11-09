//Cartel utilizando libreria

const botonDos = document.getElementById("vaciarCarrito");

botonDos.addEventListener("click", () => {
  Swal.fire({
    title: "Carrito Borrado :(",
    icon: "warning",
    confirmButtonText: "Aceptar"
  });
});
