class box  {
    constructor (x,y,width,height, color) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
        this.width=width;
        this.height=height;
        this.color=color
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        fill(this.color);
        rect(pos.x,pos.y,this.width,this.height);
    }
}