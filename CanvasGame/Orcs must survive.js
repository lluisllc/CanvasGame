const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let heroImagen = new Image();
heroImagen.src = "./Monk b.png"

heroImagen.onload = function () {
    ctx.drawImage(heroImagen, 120, 50, 120, 150);
}

let enemigoImagen = new Image();
enemigoImagen.src = "./Orc 2d.png";

enemigoImagen.onload = function () {
    ctx.drawImage(enemigoImagen, 320, 50, 120, 150);

    enemigoImagen.onload = function () {
        ctx.drawImage(enemigoImagen, 320, 150, 120, 150);

        enemigoImagen.onload = function () {
            ctx.drawImage(enemigoImagen, 320, 250, 120, 150);

            enemigoImagen.onload = function () {
                ctx.drawImage(enemigoImagen, 320, 350, 120, 150);

                enemigoImagen.onload = function () {
                    ctx.drawImage(enemigoImagen, 320, 450, 120, 150);

                }
            }
        }
    }
}


/*
const obstaculos = [];

const hero = new Objeto(250, 0, 60, 60, heroImagen, ctx);

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

const moverHero = (e) => {
    hero.borrar();
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
    hero.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverHero);

*/