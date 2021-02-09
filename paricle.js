class Particle{
    constructor(x,y,width,height){
        var options={
       restitution:0.2,
       friction:0.5,
       density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.color=(random(0,255),random(0,255),random(0,255))
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(angle)
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}