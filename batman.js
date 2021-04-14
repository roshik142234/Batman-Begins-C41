
class Batman{
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("bat.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius-100, this.radius);
        this.visiblity = 0;
        pop();
        if(keyDown(RIGHT_ARROW)){
            this.body.position.x = this.body.position.x+10;
          }
        if(keyDown(LEFT_ARROW)){
            this.body.position.x = this.body.position.x-10;
        }
    }
}
