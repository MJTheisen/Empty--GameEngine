class Deathscythewalk {
    constructor(game) {
        this.game = game;   
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/deathscythewalk.png"), 
        0, 0, 80, 114, 12, 0.1);
        // the width of the deathscythe in pixels is 80 pixels. 
        // the height of the deathscythe in pixels is 114 pixels.

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./deathscythewalk.png"),0,0);
    };
}