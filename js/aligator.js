class aligator{
    constructor(x, y, width, height, allipos){
        var options = {
           // isStatic: false,
            friction:1.0,
            density:1.0,
            restitution:0.8,
            //label:"cro"
          };
          //this.animation = crosAnimation;
          //this.speed = 0.05;
          this.image = loadImage("./assets/croco1.png");
          this.width = width;
          this.height = height;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options);
          this.alliposition = allipos;

          World.add(world, this.body);
    }

   /* animate(){
        this.speed += 0.05 % 1.1; 
    }

   /* remove(index){
        Matter.World.remove(world, cros[index].body);
        cros.splice(index, 1);
    }*/

    display(){
        var angle = this.body.angle;
        var  pos = this.body.position
       // var index = floor(this.speed % this.animation.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0 ,0,this.width, this.height);
        noTint();
        pop();
    }
}