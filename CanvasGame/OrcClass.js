class Orc {
    constructor(ctx, width, height, canvasSize, position, speed) {
        this.ctx = ctx;
        this.orcSize = { w: width, h: height };
        this.canvasSize = canvasSize;
        this.orcPosition = { x: position, y: 300 };
        this.image = undefined;
        //this.randomImage = Math.trunc(Math.random() * (4 - 1) + 1);
        this.speed = speed;
        //this.imageInstance = new Image();
        // this.imageInstance.src = `images/rotatedCars/car${this.randomImage}.png`;
        this.image = new Image();
        this.image.src = `../IMGMarc/Orc 6.png`
    }

    drawOrc() {
        this.ctx.drawImage(
            this.image,
            this.orcPosition.x,
            this.orcPosition.y,
            this.orcSize.w,
            this.orcSize.h
        );
        this.move();
    }

    move() {
        this.orcPosition.x -= this.speed;
    }
}