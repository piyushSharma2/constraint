class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:100,
            stiffness:0.5
        }

        this.Chain=Constraint.create(options)
        World.add(world,this.Chain)
    }
    display(){
        strokeWeight(3)
        line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)
    }
}