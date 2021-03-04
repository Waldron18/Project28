class Ground{
    constructor(){
        var options={
            isStatic: true,
            friction: 0.5
        }
        this.body = Bodies.rectangle(400,690,800,20,options);
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(100);
        rect(400,690,800,20);
        pop();
    }
}