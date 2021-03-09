class Paper{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
          this.body = Bodies.circle(70,620,24,options);
          this.image = loadImage("paper.png");
          World.add(world, this.body);
    }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
        imageMode(CENTER);
        image(this.image, 0, 0,80,80);
        pop();
      }
}