//CREATE CLASS DROP
class createDrop{
    constructor(x,y){
        var prop = {
            friction:0.001,
            restitution:0.1
        }
        this.circle = Bodies.circle(x,y,5,prop);
        this.radius = 5;
        World.add(world,this.circle);


    }
    updateY(){
        if (this.circle.position.y>height){
            Matter .Body.setPosition(this.circle,{x: random (0,400),y:random (0,400)})
        }
    }
    showDrop (){
        fill ("yellow")
        ellipseMode (CENTER);
        ellipse (this.circle.position.x,this.circle.position.y,this.radius,this.radius)
    }
}