class bob{
    constructor(x, y,radius){ 
        this.body = Bodies.circle(x, y,radius);
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}