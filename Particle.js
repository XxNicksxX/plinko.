class Particle{
   constructor(x,y){
    var options = {
     
    }
       this.r = 10
       this.color=color(random(0,255), random(0,255), random(0,255))
       this.body = Bodies.circule(x,y,this.r,options)
       World.add(world, this.body)
      
    }
    display(){
     
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    
    }

}