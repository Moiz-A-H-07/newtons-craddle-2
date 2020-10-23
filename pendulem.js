class Pendulem{ 
    constructor(x,y,color) {
      var options = { 
        //isStatic: false, 
        restitution:1, 
        friction:0,
        frictionAir:0.0,
        slope:1,
        inertia:Infinity
         //density:0.8 
        } 
         this.x= x;
          this.y= y; 
          this.color=color; 
         
          this.body = Bodies.rectangle(x,y,40,40,options);
       World.add(world,this.body); 
          } 
      display(){
        var angle=this.body.angle
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rotate(angle)
      rectMode(CENTER); 
      fill(this.color);
      ellipse(0,0, 60, 60); 
      
      pop() 
       }
                 };
