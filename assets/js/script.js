
// first part of the challenge //

function changeborder() {
    const border = document.getElementById('border');
    if(border.style.border === "") {
        border.style.border = "solid 10px #007a04";
    }
    else {
        border.style.border = "";
    }
}

// second part of the challenge //


function agregar() {
    const tomaste1 = document.getElementById('tomas-1').value;
    const tomaste2 = document.getElementById('tomas-2').value;
    const tomaste3 = document.getElementById('tomas-3').value;
    const numberimg1 = parseInt(tomaste1);
    const numberimg2 = parseInt(tomaste2);
    const numberimg3 = parseInt(tomaste3);
    const total = numberimg1 + numberimg2 + numberimg3;

    if(total < 10 && total >= 1) {
        document.getElementById('tomaste').innerHTML = `Llevas ${total} articulos`;
        
    }
    else if (total >= 11) {
        document.getElementById('tomaste').innerHTML = "Llevas demasiados articulos";
    }

    else if (total === 10) {
        document.getElementById('tomaste').innerHTML = "Llevas 10 articulos";
    }
    else {
        document.getElementById('tomaste').innerHTML = "No has ingresado articulos";
    }
    total.value = "";
}


// third part part of the challenge //

function verificar() {
    const passw1 = document.getElementById('password1').value;
    const passw2 = document.getElementById('password2').value;
    const passw3 = document.getElementById('password3').value;
    if(passw1 === "9" && passw2 === "1" && passw3 === "1") {
        document.getElementById('password').innerHTML = "Password 1 correcto";
    }
    else if (passw1 === "7" && passw2 === "1" && passw3 === "4") {
        document.getElementById('password').innerHTML = "Password 2 correcto";
    }
    else if (passw1 === "" && passw2 === "" && passw3 === "") {
        document.getElementById('password').innerHTML = "Ingresa un Password";
    }
    else {
        document.getElementById('password').innerHTML = "Password incorrecto";
    }
}