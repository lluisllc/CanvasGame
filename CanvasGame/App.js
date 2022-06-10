const App = {
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    intervalId: undefined,
    framesCounter: 0,
    speed: 1,
    score: 0,
    y: 0,

    init(canvas) {
        this.setContext(canvas);
        this.setCanvasDimensions(canvas);


        this.imageBackground = new Image();
        this.imageBackground.src = "../IMGMarc/campo5.webp";

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
        this.newHero = new Hero(this.ctx, 80, 100, this.canvasSize);
    },

    setListeners() {
        document.addEventListener("keydown", (e) => {
            console.log(e)
            e.key === "ArrowUp" ? (this.newHero.moveUp = true) : null;
            e.key === "ArrowDown" ? (this.newHero.moveDown = true) : null;

            e.code === "KeyW" ? (this.newHero.moveUpGamer = true) : null;
            e.code === "KeyS" ? (this.newHero.moveDownGamer = true) : null;

        });


        document.addEventListener("keyup", (e) => {
            e.key === "ArrowUp" ? (this.newHero.moveUp = false) : null;
            e.key === "ArrowDown" ? (this.newHero.moveDown = false) : null;

            e.code === "KeyW" ? (this.newHero.moveUpGamer = false) : null;
            e.code === "KeyS" ? (this.newHero.moveDownGamer = false) : null;

        });

    },

    refreshScreen() {
        this.intervalId = requestAnimationFrame(() => this.refreshScreen());

        //ctx.clearRect(0, 0, canvas.width, canvas.height);

        //this.checkIfCollision();
        this.clearCanvas();
        this.drawAll();
        this.newHero.move();
        this.framesCounter++;

        if (this.framesCounter % 100 === 0) {
            this.newOrc = new Orc(this.ctx, 80, 100, this.canvasSize)
        }

    },

    drawAll() {
        this.drawBackground();
        //this.moveBackground();
        this.newHero.drawHero();
        //this.newOrc.drawOrc();
        //this.obstacles.forEach((obstacle) => obstacle.draw());
        //this.animals.forEach((animal) => animal.draw());
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
}