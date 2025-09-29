console.log("page loaded...");

function liked(element) {
    if(element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}

function sumarLike() {
    const boton = document.getElementById("likeButton");
    let numeroLikes = parseInt(boton.innerText);
    numeroLikes++;
    boton.innerText = numeroLikes + " likes";
}

function sumarLike2() {
    const boton = document.getElementById("likeButton2");
    let numeroLikes = parseInt(boton.innerText);
    numeroLikes++;
    boton.innerText = numeroLikes + " likes";
}
