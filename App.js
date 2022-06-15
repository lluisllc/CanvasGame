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

    init(canvas) {
        this.setContext(canvas);
        this.setCanvasDimensions(canvas);


        this.imageBackground = new Image();
        this.imageBackground.src = "../IMGMarc/campo5.webp";
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


            e.code === "Space"
                ? this.newBullet() : null;
        });



        document.addEventListener("keyup", (e) => {
            e.key === "ArrowUp" ? (this.newHero.moveUp = false) : null;
            e.key === "ArrowDown" ? (this.newHero.moveDown = false) : null;

            e.code === "KeyW" ? (this.newHero.moveUpGamer = false) : null;
            e.code === "KeyS" ? (this.newHero.moveDownGamer = false) : null;
            /* LLC
                        e.code === "SPACEBAR"
                            ? this.balas.push(
                                (this.newBala = new Bala(
                                    this.ctx,
                                    this.newBullet.returnMoveX(),
                                    this.newBullet.returnMoveY(),
                                    10
                                ))
                            )
                            : null;
            */

        });


    },

    refreshScreen() {
        this.intervalId = requestAnimationFrame(() => this.refreshScreen());

        //ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.checkIfCollision();
        this.clearCanvas();
        this.drawAll();

        this.newHero.move();
        // this.checkBala();

        /*
        this.balas.forEach((bala) => {
            if (bala != null) {
                bala.drawBullet();
            }
        });
*/

        this.framesCounter++;

        if (this.framesCounter % 100 === 0) {
            this.newEnemy();
        }

        // if (this.framesCounter % 50 === 0) {
        //     this.newBullet();
        // }

    },

    newBullet() {
        const width = 10;
        const height = 10;
        const yPosition = this.newHero.positionHeroY() + 20;//Debería ser la del Heroe!

        const newBullet = new Bala(
            this.ctx,
            width,
            height,
            this.canvasSize,
            yPosition,
            this.speed
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

    showScores() {
        this.ctx.font = "35px Verdana";
        this.ctx.fillStyle = "blue";
        this.ctx.fillText("Score: " + this.score++, 50, 90);
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
                        this.enemigos[i] = null;
                        this.balas[j] = null;
                    }
                }
            }
        }
        for (let i = 0; i < this.enemigos.length; i++) {
            enemigos = this.enemigos[i];
            if (enemigos != null) {
                if (
                    this.newHero.positionHeroX() === enemigos.orcPosition.x
                ) {
                    this.stopGame()

                }
            }
        }
    },





    // if (170 < this.newOrcEnemy.positionOrcX() + 80 &&
    //     170 + 90 > this.newOrcEnemy.positionOrcX() &&
    //     this.newHero.positionHeroY() < this.newOrcEnemy.positionOrcY() + 100 &&
    //     100 + this.newHero.positionHeroY() > this.newOrcEnemy.positionOrcY()) {
    //     console.log('OK')
    // }
    // if (this.enemigos.length) {
    //     this.enemigos.forEach((elem) => {
    //         if (elem != null) {
    //             elem.drawOrc();

    // if (this.newHero.positionHeroX() === this.newOrcEnemy.positionOrcX()) {
    //     this.stopGame();
    // }
    // this.newHeroPosition.x <
    // elem.newOrcEnemy.x + elem.orcSize.w - 10 &&
    // this.newHero.newHeroPosition.x + this.newHero.heroSize.w - 10 >
    // elem.orcPosition.x)
    // this.newHero.newHeroPosition.y <
    // elem.orcPosition.y + elem.orcSize.h - 10 &&
    // this.newHero.heroSize.h - 10 + this.newHero.heroPosition.y >
    // elem.orcPosition.y
    // {
    //     this.stopGame();
    // }
    //             }
    //         });
    //     }

    /*
        checkBala() {
            for (let i = 0; i < this.enemigos.length; i++) {
                //recorre el array enemigos
                for (let j = 0; j < this.balas.length; j++) {
                    //recorre el array balas
                    enemigos = this.enemigos[i];
                    balas = this.balas[j];
                    //console.log(enemigos);
                    if (enemigos != null && balas != null) {
                        //preguntamos si es diferente a nulo.
                        if (balas.x > enemigos.orcPosition.x && balas.x < enemigos.orc.x + 50) {
                            //   balas.y > enemigos.orcPosition.y &&
                            //   balas.y < enemigos.orcPosition.y + 50
    
                            //console.log("boom");
                            this.enemigos[i] = null;
                            this.balas[j] = null;
                        }
                    }
                }
            }
        },
    */
    stopGame() {
        window.cancelAnimationFrame(this.intervalId);

        const endGame = document.getElementById("endScreen");
        endGame.classList.remove("hidden");

        const canvas = document.querySelector("#canvas");
        canvas.classList.add("hidden");

        const totalScore = document.getElementById("totalScore");
        totalScore.innerHTML = this.score;


        //Hacer un refresh
        const buttonRestart = document.querySelector("#restart-button");
        buttonRestart.setAttribute("onclick", "window.location.reload()");

        //Limpiamos el score ya que lo mostramos por pantalla al finalizar
        //this.stopScore();
    },
}