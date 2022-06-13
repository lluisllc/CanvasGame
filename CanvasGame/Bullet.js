class Bala {
    constructor(ctx, width, height, canvasSize, position, speed) {
        this.ctx = ctx;
        this.bulletSize = { w: width, h: height };
        this.canvasSize = canvasSize;
        this.bulletPosition = { x: 170, y: position }
        this.image = undefined;
        //this.randomImage = Math.trunc(Math.random() * (4 - 1) + 1);
        this.speed = speed;
        this.image = new Image();
        this.image.src = `../IMGMarc/phantomBullets.png`
    }

    drawBullet() {
        this.ctx.drawImage(
            this.image,
            this.bulletPosition.x,
            this.bulletPosition.y,
            this.bulletSize.w,
            this.bulletSize.h
        );
        this.move();
    }

    move() {
        this.bulletPosition.x += this.speed;
    }
}