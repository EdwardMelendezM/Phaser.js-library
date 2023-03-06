const config = {
  width: 320 * 2,
  height: 180 * 2,
  parent: "container",
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 500
      }
    }
  }
}

let game = new Phaser.Game(config);
function preload() {
  this.load.image("pajaro", "/assets/angry.png")
}
function create() {
  this.pajaro = this.physics.add.image(80, 100, "pajaro");
  this.pajaro.setScale(0.5);
  // this.pajaro.flipX = true;
  // this.pajaro.setAngle(30);
  this.pajaro.setOrigin(0.5)
  this.pajaro.setCollideWorldBounds(true);
  this.pajaro.setBounce(1);
  // this.pajaro.setAcceleration(10, 0);
  this.pajaro.setVelocity(90, 0);

}
function update(time, delta) {
  // this.pajaro.x++;
  // this.pajaro.y++;
  // this.pajaro.angle++;
}