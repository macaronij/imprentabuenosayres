const logo = document.getElementById("logo");
logo.addEventListener("click", ()=>location.reload());

function cambiarFoto(clase) {
    const banner = document.querySelector(".banner");
    banner.classList.remove("banner__talonarios");
    banner.classList.remove("banner__volantes");
    banner.classList.remove("banner__tarjetas");
    banner.classList.remove("banner__trabajos");
    banner.classList.remove("banner__presupuestos");
    banner.classList.add(clase)
}

const talonarios = document.getElementById("talonarios");
talonarios.addEventListener("click", ()=>cambiarFoto("banner__talonarios"));

const volantes = document.getElementById("volantes");
volantes.addEventListener("click", ()=> cambiarFoto("banner__volantes"));

const tarjetas = document.getElementById("tarjetas");
tarjetas.addEventListener("click", ()=> cambiarFoto("banner__tarjetas"));

const trabajos = document.getElementById("trabajos");
trabajos.addEventListener("click", ()=> cambiarFoto("banner__trabajos"));

const presupuestos = document.getElementById("presupuestos");
presupuestos.addEventListener("click", ()=>cambiarFoto("banner__presupuestos"));



