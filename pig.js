class Pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      pos.x = mouseX;
      pos.y = mouseY;
      //add
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);// increasing the thickness of boundry
      stroke("green")
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();// restore/remove
    }
  };