class Hero {
    constructor(ctx, width, height, canvasSize) {
        this.ctx = ctx;
        this.heroSize = { w: width, h: height };
        this.canvasSize = canvasSize;
        this.image = undefined;
        this.heroPosition = {
            x: this.canvasSize.w / 2 - 280, //170
            y: this.canvasSize.h - 140,   //460
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
        this.image.src = `./IMGMarc/Goblin ghost.png`
        this.health = 3;
    }

    updateHealth() {
        return this.health--;
    }

    getHealth() {
        return this.health
    }

    drawHero() {
        //Primer parametro Image, posicion X, posicion Y.
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
        (this.heroPosition.y <= this.canvasSize.h && this.moveDown) ||
            (this.heroPosition.y <= this.canvasSize.h && this.moveDownGamer)
            ? (this.heroPosition.y += 4)
            : null;
        (this.heroPosition.y >= 30 && this.moveUp) ||
            (this.heroPosition.y >= 30 && this.moveUpGamer)
            ? (this.heroPosition.y -= 4)
            : null;
    }

    positionHeroX() {
        return this.heroPosition.x;
    }

    positionHeroY() {
        return this.heroPosition.y;
    }
};