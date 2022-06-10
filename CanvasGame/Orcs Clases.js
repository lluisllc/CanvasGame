const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
body = document.body;

/*
let shooterImagen = new Image();
shooterImagen.src = "./Goblin ghost.png"


shooterImagen.onload = function () {
    ctx.drawImage(shooterImagen, 140, 50, 160, 160);
}

let enemigoImagen = new Image();
enemigoImagen.src = "./Orc 6.png"

enemigoImagen.onload = function () {
    ctx.drawImage(enemigoImagen, 850, 30, 170, 170);
}
*/

class Hero {
    constructor(ctx, width, height, canvasSize) {
        this.ctx = ctx;
        this.heroSize = { w: width, h: height };
        this.canvasSize = canvasSize;
        this.image = undefined;
        this.heroPosition = {
            x: this.canvasSize.w / 2 - 50,
            y: this.canvasSize.h - 140,
        };
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeftGamer = false;
        this.moveRightGamer = false;
        this.moveUpGamer = false;
        this.moveDownGamer = false;
        this.image = new Image();
        this.image.src = `./Goblin ghost.png`;
    }
    drawHero() {
        //Primer parametro Image, posicion X, posicion Y, dimension coche W, dimension coche H
        this.ctx.drawImage(
            this.image,
            this.heroPosition.x,
            this.heroPosition.y,
            this.heroSize.w,
            this.heroSize.h
        );
    }
    move() {
        //solo necesitamos movimiento vertical
        (this.heroPosition.y <= this.canvasSize.h - 130 && this.moveDown) ||
            (this.heroPosition.y <= this.canvasSize.h - 130 && this.moveDownGamer)
            ? (this.heroPosition.y += 4)
            : null;
        (this.heroPosition.y >= 30 && this.moveUp) ||
            (this.heroPosition.y >= 30 && this.moveUpGamer)
            ? (this.heroPosition.y -= 4)
            : null;
    }
}

/*
let shooter = {
    y: canvas.height / 2 - 25,
    height: 50,
    width: 20,
    // Pressed keys will be stored here
    pressed_keys: [],
    shots: [],

    draw_shooter() {
        ctx.drawImage(shooterImagen, 140, 50, 160, 160);
    },

    move_shooter() {
        const up = this.pressed_keys.includes("ArrowUp"),
            down = this.pressed_keys.includes("ArrowDown");
        // If both keys are pressed, do nothing
        if (up && down) { return; }
        if (up) { this.y = Math.max(0, this.y - 2); }
        if (down) { this.y = Math.min(canvas.height, this.y + 2); }
    },

    // Add key to the Array
    on_key_down(e) {
        this.pressed_keys.push(e.code);
    },

    // Remove key from the Array
    on_key_up(e) {
        this.pressed_keys = this.pressed_keys.filter(k => k !== e.code);
    },

    shoot() {
        let shot = {
            x: 30,
            y: this.y + 20,
            draw() {
                //check if more, then kill in array
                ctx.strokeRect(this.x, this.y, 20, 10);
                this.x += 5;
            }
        }
        this.shots.push(shot);
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shooter.draw_shooter();
    shooter.shots.map((shot) => shot.draw());
    // Move shooter
    shooter.move_shooter();
    requestAnimationFrame(update);
}

update();

body.addEventListener(`keydown`, (e) => shooter.on_key_down(e));
body.addEventListener(`keyup`, (e) => shooter.on_key_up(e));
body.addEventListener(`keypress`, (e) => shooter.shoot(e));





    //  X= 320 Y = 30 First row
    // Punto de colision X = 180
    // Spawn enemies  X = 900

/* Intento de muchos enemigos 
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