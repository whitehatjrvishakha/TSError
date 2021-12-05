class Slingshot {
    constructor (body1,pointBxy) {
        var options = {
            bodyA: body1,
            pointB: pointBxy,
            stiffness: 0.05, 
            length: 10
        }
        this.pointB=pointBxy;
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display () {
        if (this.chain.bodyA) {
        var pointA = this.chain.bodyA.position
        
        stroke("green");
        strokeWeight(1);
        line (pointA.x,pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    free () {
        this.chain.bodyA=null
    }
}