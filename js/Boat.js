class Boat{
    constructor(x,y,width,height,boatposition){
        var options = {
            restitution:0.8,
            friction:1,
            density:1.
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height 
        this.image = loadImage("./assets/");
    }
}