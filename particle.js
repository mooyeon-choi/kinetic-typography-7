const FRICTION = 0.98;
const MOVE_SPEED = 0.05;

export class Particle {
  constructor(pos, texture) {
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.scale.set(0.5);

    this.initX = pos.x;
    this.initY = pos.y;
    this.savedX = 0;
    this.savedY = 0;
    this.centerX = pos.x;
    this.centerY = pos.y;
    this.x = pos.x;
    this.y = pos.y;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 10;
  }

  draw() {
    if (this.savedX == this.initX) {
      this.x += (this.savedX - this.x) * MOVE_SPEED;
      this.y += (this.savedY - this.y) * MOVE_SPEED;
    }
    else {
      this.x += (this.savedX - this.x) * MOVE_SPEED * Math.random();
      this.y += (this.savedY - this.y) * MOVE_SPEED * Math.random();
    }

    this.vx *= FRICTION;
    this.vy *= FRICTION;

    this.x += this.vx;
    this.y += this.vy;

    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}
