const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let orcoImagen = new Image();
orcoImagen.src = "./Wizard sense terra.png"

orcoImagen.onload = function () {
    ctx.drawImage(orcoImagen, 50, 50, 150, 100);
}
/*
let obstaculoImagen = new Image();
obstaculoImagen.src = "src/obstaculo.png";

const obstaculos = [];

const orco = new Objeto(250, 0, 60, 60, orcoImagen, ctx);

const jugar = () => {
    for (let obstaculo of obstaculos) {
        obstaculo.borrar();
        obstaculo.y -= 5;
        obstaculo.dibujar();
        if (coche.detectarColision(obstaculo)) {
            console.log("Has perdido");
        }
    }
};

const crearObstaculos = () => {
    const randomPositionX = Math.floor(Math.random() * 480);
    const obstaculo = new Objeto(
        randomPositionX,
        570,
        120,
        60,
        obstaculoImagen,
        ctx
    );
    obstaculos.push(obstaculo);
};

const cargaInicial = () => {
    coche.dibujar();
    setInterval(jugar, 200);
    setInterval(crearObstaculos, 3000);
};

const moverOrco = (e) => {
    orco.borrar();
    if (e.key === "ArrowLeft") {
        orco.x -= 5;
    }
    if (e.key === "ArrowRight") {
        orco.x += 5;
    }
    if (e.key === "ArrowUp") {
        orco.y -= 5;
    }
    if (e.key === "ArrowDown") {
        orco.y += 5;
    }
    orco.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverOrco);

*/