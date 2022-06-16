const App = {
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    intervalId: undefined,
    framesCounter: 0,
    enemigos: [],
    balas: [],
    speed: 1,
    score: 0,
    y: 0,
    //this.heroPosition.x: 170,
    //this.heroPosition.y:460,
    newBullet: '',
    audio1: document.getElementById("audio1"),
    audio2: document.getElementById("audio2"),
    audio3: document.getElementById("audio3"),


    init(canvas) {
        this.setContext(canvas);
        this.setCanvasDimensions(canvas);

        audio1.volume = 0.1;
        audio1.play();
        // this.playStartingSound(audio2);

        this.imageBackground = new Image();
        this.imageBackground.src = "./IMGMarc/campo5.webp"

        //  this.endgame = endgame;
        this.createNewHero();
        this.setListeners();
        this.refreshScreen();
    },

    setContext(canvas) {
        this.ctx = canvas.getContext("2d");
        this.ctx.globalCompositeOperation = "source-over";
    },

    setCanvasDimensions(canvas) {
        this.canvasSize.w = 900;
        this.canvasSize.h = 600;
        canvas.setAttribute("width", this.canvasSize.w);
        canvas.setAttribute("height", this.canvasSize.h);
    },

    createNewHero() {
        this.newHero = new Hero(this.ctx, 90, 100, this.canvasSize);
    },

    setListeners() {
        document.addEventListener("keydown", (e) => {
            e.key === "ArrowUp" ? (this.newHero.moveUp = true) : null;
            e.key === "ArrowDown" ? (this.newHero.moveDown = true) : null;

            e.code === "KeyW" ? (this.newHero.moveUpGamer = true) : null;
            e.code === "KeyS" ? (this.newHero.moveDownGamer = true) : null;

            e.code === "Space" ? this.newBullet() : null;

            if (e.code === "Space") {
                this.soundGo();
            }
        });

        document.addEventListener("keyup", (e) => {
            e.key === "ArrowUp" ? (this.newHero.moveUp = false) : null;
            e.key === "ArrowDown" ? (this.newHero.moveDown = false) : null;

            e.code === "KeyW" ? (this.newHero.moveUpGamer = false) : null;
            e.code === "KeyS" ? (this.newHero.moveDownGamer = false) : null;
        });
    },

    soundGo() {
        var audio = new Audio("./Sound/pewpew.mp3");
        audio.volume = 0.1;
        audio.play();
    },

    refreshScreen() {
        this.intervalId = requestAnimationFrame(() => this.refreshScreen());

        this.checkIfCollision();
        this.clearCanvas();
        this.drawAll();
        this.newHero.move();

        this.framesCounter++;
        if (this.framesCounter % 50 === 0) {
            this.newEnemy();
        }

    },

    newBullet() {
        const width = 10;
        const height = 10;
        const yPosition = this.newHero.positionHeroY() + 20;
        const randomSpeedBullet = 4;

        const newBullet = new Bala(
            this.ctx,
            width,
            height,
            this.canvasSize,
            yPosition,
            randomSpeedBullet
        );
        this.balas.push(newBullet);
    },

    newEnemy() {
        const randomWidth = 80;
        const randomHeight = 100;
        const yRandomPosition = Math.trunc(Math.random() * (this.canvasSize.h - 100));
        const randomSpeed = 2;

        const newOrcEnemy = new Orc(
            this.ctx,
            randomWidth,
            randomHeight,
            this.canvasSize,
            yRandomPosition,
            randomSpeed
        );
        this.enemigos.push(newOrcEnemy);
    },

    drawAll() {
        this.drawBackground();
        //this.moveBackground();
        this.newHero.drawHero();
        this.balas.forEach((element) => {
            if (element != null) {
                element.drawBullet()
            }
        })
        this.enemigos.forEach((element) => {
            if (element != null) {
                element.drawOrc()
            }
        })
        this.showScores();
        this.showHealth();
    },

    drawBackground() {
        this.ctx.drawImage(this.imageBackground, 0, 0, this.canvasSize.w, this.canvasSize.h);

        this.ctx.drawImage(
            this.imageBackground,
            0,
            this.y,
            this.canvasSize.w,
            this.canvasSize.h
        );

        if (this.speed < 0) {
            this.ctx.drawImage(
                this.imageBackground,
                0,
                this.y + this.canvasSize.h,
                this.canvasSize.w,
                this.canvasSize.h
            );
        } else {
            this.ctx.drawImage(
                this.imageBackground,
                0,
                this.y - this.canvasSize.h,
                this.canvasSize.w,
                this.canvasSize.h
            );
        }
    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    showHealth() {

        this.ctx.font = "35px Verdana";
        this.ctx.fillStyle = "red";
        this.ctx.fillText("Life: " + this.newHero.getHealth(), 350, 90);
    },

    showScores() {
        this.ctx.font = "35px Verdana";
        this.ctx.fillStyle = "blue";
        this.ctx.fillText("Score: " + this.score, 50, 90);
    },

    stopScore() {
        this.ctx.font = "0px Verdana";
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        this.ctx.globalCompositeOperation = "destination-over";
    },

    checkIfCollision() {
        for (let i = 0; i < this.enemigos.length; i++) {
            //recorre el array enemigos
            for (let j = 0; j < this.balas.length; j++) {
                //recorre el array balas
                enemigos = this.enemigos[i];
                balas = this.balas[j];
                //console.log(enemigos);
                if (enemigos != null && balas != null) {
                    //preguntamos si es diferente a nulo.
                    if (
                        balas.bulletPosition.x > enemigos.orcPosition.x &&
                        balas.bulletPosition.x < enemigos.orcPosition.x + 50 &&
                        balas.bulletPosition.y > enemigos.orcPosition.y &&
                        balas.bulletPosition.y < enemigos.orcPosition.y + 100
                    ) {
                        //console.log("boom");
                        this.score = this.score + 200;
                        this.enemigos[i] = null;
                        this.balas[j] = null;
                    }
                }
            }
        }
        for (let i = 0; i < this.enemigos.length; i++) {
            enemigos = this.enemigos[i];
            if (enemigos != null) {
                if (this.newHero.positionHeroX() >= enemigos.orcPosition.x) {
                    //nos cargamos los que llegan a x del HERO
                    this.enemigos[i] = null;

                    if (this.enemigos[i] === null) {
                        this.newHero.updateHealth();
                    }

                    if (this.newHero.getHealth() === 0) {
                        this.stopGame();
                        audio3.volume = 0.1;
                        audio3.play();
                    }
                }
            }
        }
    },

    stopGame() {
        window.cancelAnimationFrame(this.intervalId);

        audio1.pause();

        const endGame = document.getElementById("endScreen");
        endGame.classList.remove("hidden");
        endGame.classList.add("flex");

        const canvas = document.querySelector("#canvas");
        canvas.classList.add("hidden");

        const totalScore = document.getElementById("totalScore");
        totalScore.innerHTML = "Your total score is: " + this.score;

        const buttonRestart = document.querySelector("#restart-button");
        buttonRestart.setAttribute("onclick", "window.location.reload()");
    },
};

