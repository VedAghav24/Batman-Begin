

class Umbrella{
    constructor(x,y) {
      var options = {
         isStatic:true,
      }
      this.umbrella= Bodies.circle(x,y,50,options);
      this.radius = 50;
      World.add(world, this.umbrella);
      this.image=loadImage("images/Walking/walking_1.png")
    }
    
    
    display(){
      var pos =this.umbrella.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y+70, 300, 300);
    }
  };
  