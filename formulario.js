function validarForm() {
    var mail = document.forms["formulario"]["mail"].value;

    var pass = document.forms["formulario"]["clave"].value;


    var fecha = document.forms["formulario"]["fecha"].value;
    var varFecha = new Date(fecha); //dd-mm-YYYY
    var hoy = new Date();

    if (mail == "") {
        alert("Es necesario escribir un mail");
        return false;
    }

    if (pass.length  < 5) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }

    if(varFecha <= hoy) {
        alert("La fecha es anterior a hoy");
        return false;
    }

}




