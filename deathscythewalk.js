class Deathscythewalk {
    constructor(game) {
        this.game = game;   
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/deathscythewalk.png"), 
        0, 0, 80, 114, 12, 0.15); //must have value for framDuration
        // the width of the deathscythe in pixels is 80 pixels. 
        // the height of the deathscythe in pixels is 114 pixels.
        // the spritesheet was made with bad overlaps though, so I need to fix it manually.
        this.x = -200;
        this.y = 200;
        this.speed = 300;



    };

    update() {
        this.x += this.speed * this.game.clockTick
        if(this.x > 1024) this.x = -80;

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./deathscythewalk.png"),0,0);
    };
}