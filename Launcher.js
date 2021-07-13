class Launcher{
    constructor(bodyA,pointB){
     var option = {
     bodyA: bodyA,
     pointB: pointB,
     stiffness: 0.03,
     length: 8

     }
     this.pointB = pointB

     this.launch = constraint.create(option);
     World.add(world, this.launch )

    }
    fly(){this.launch.bodyA = null;}
     display(){
      if(this.launch.bodyA){
     
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
      }

     }


}