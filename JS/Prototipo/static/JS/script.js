// (Item 5) Código JS indentado y con comentarios en español.

/**
 * (Item 15) Función JS propia para manipulación del DOM.
 * (Items 8, 9, 13) Eventos onmouseover/onmouseout (Hover con JS) usando 'this'.
 * 'elemento' es el 'this' (la propia etiqueta span) que se pasó desde el HTML.
 */
function resaltarHabilidad(elemento) {
    // Cambia el estilo del elemento que disparó el evento
    elemento.style.backgroundColor = '#212529'; // Color oscuro
    elemento.style.color = '#FFFFFF'; // Texto blanco
    elemento.style.transform = 'scale(1.1)'; // Agranda el badge
}

function restaurarHabilidad(elemento) {
    // Restaura los estilos originales (o los quita para que CSS mande)
    elemento.style.backgroundColor = ''; // Vuelve al color original de Bootstrap
    elemento.style.color = ''; // Vuelve al color original
    elemento.style.transform = 'scale(1)'; // Vuelve al tamaño original
}


/**
 * (Item 11) Evento onchange implementado usando 'this'.
 * Se activa cuando el usuario sale del input después de cambiar el valor.
 */
function validarInput(input) {
    // (Item 7) Muestra en consola que el evento funciona (sin errores)
    console.log(`Input '${input.name}' cambiado. Nuevo valor: '${input.value}'`);
    
    // Simulación de validación
    if (input.value.trim() === '') {
        input.classList.add('is-invalid'); // Clase de Bootstrap para error
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid'); // Clase de Bootstrap para éxito
    }
}

/**
 * (Item 10) Evento onclick implementado usando 'this'.
 * Se activa al hacer clic en el botón del formulario.
 */
function enviarFormulario(boton) {
    console.log('Botón clickeado:', boton);
    boton.innerText = 'Enviando (Simulación)...';
    boton.disabled = true;

    // Simulación de envío
    setTimeout(() => {
        alert('¡Formulario enviado (simulación)! Gracias por contactarme.');
        
        // Resetea el formulario y el botón
        document.getElementById('formulario-contacto').reset();
        boton.innerText = 'Enviar Mensaje (Simulación)';
        boton.disabled = false;
        
        // Limpia las clases de validación
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('is-valid');
            input.classList.remove('is-invalid');
        });

    }, 1500); // Espera 1.5 segundos
}

/**
 * (Item 14) 'this' para remover dinámicamente elementos del DOM.
 * Se usa 'this' para referenciar el botón 'close' (la 'x').
 * (Nota: Bootstrap maneja la eliminación, pero para cumplir el ítem 14,
 * podríamos hacerlo manual. Sin embargo, el 'btn-close' de Bootstrap ya
 * apunta a su 'parentElement' (el alert) con 'data-bs-dismiss'.
 * * Para forzar el cumplimiento del ítem 14 (remover con JS usando 'this'),
 * anulamos el comportamiento de Bootstrap y usamos JS puro:
 */
function removerAlerta(botonCerrar) {
    // 'botonCerrar' es 'this' (el botón 'x').
    // 'parentElement' es el 'div.alert'.
    const alerta = botonCerrar.parentElement;
    
    // (Item 14) Remueve el elemento (la alerta) del DOM.
    alerta.remove();
    console.log('Alerta removida usando JS y this.');
}