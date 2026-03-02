function mostrarReserva() {
    const nombre = document.getElementById('name').value;
    const fecha = document.getElementById('date').value;
    const personas = document.getElementById('guests').value;
    const email = document.getElementById('email').value;

    if (nombre === "" || fecha === "" || personas === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("Reserva confirmada:\n" +
          "Nombre: " + nombre + "\n" +
          "Fecha: " + fecha + "\n" +
          "Personas: " + personas + "\n" +
          "Email: " + email);
}