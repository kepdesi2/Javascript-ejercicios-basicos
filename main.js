function inicio(){
    valedad();
    setInterval('popup()',5000);
   
}

function valedad(){
    var r = confirm("Eres mayor de edad?");
    if (r != true) {
        location.href="http://www.google.es";
    }
}

function popup(){
   
    window.open("https://www.w3schools.com");
}

