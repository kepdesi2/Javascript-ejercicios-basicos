
function mostrar(){
    if (document.getElementById('oculto').style.display == 'block') {
        
        document.getElementById('oculto').style.display = 'none';
        document.getElementById('boton').value = 'Mostrar';

    } else {

        document.getElementById('oculto').style.display = 'block';
        document.getElementById('boton').value = 'Ocultar';

    }
    
}
