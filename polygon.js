class polygon  {
    constructor (x,y,radius) {
        this.body=Bodies.circle(x,y,radius,{isStatic:false});
        this.radius=radius
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        image(this.image, pos.x,pos.y,this.radius,this.radius);
    }
}
