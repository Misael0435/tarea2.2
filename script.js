window.addEventListener("DOMContentLoaded", () => {
  const inputs = ["fnom", "lappat", "lapmat"];
  
  inputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  });
});

function validarformulario() {
    let x = document.forms["registro"]["nombre"].value;
    if (x == "") {
        alert("Favor de escribir su nombre");
        document.getElementById("fnom").focus();
        return false;
    }
}
