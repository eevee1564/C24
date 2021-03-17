class Bird{

    constructor(x,y){

        var option = {
            restitution:0.5,
            friction:1.0,
            density:1.5,
        }
        this.body = Bodies.rectangle(x,y,50,50,option)
        this.height = 50;
        this.width = 50;
        World.add(world, this.body)
        }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle
            pos.x = mouseX;
            pos.y = mouseY;
            push()
            translate (pos.x ,pos.y)
            rotate (angle)
            rectMode(CENTER);
            strokeWeight (3);
            stroke ("red")
            fill(255);
            rect(0,0, this.width, this.height);
            pop () 
          }
        }