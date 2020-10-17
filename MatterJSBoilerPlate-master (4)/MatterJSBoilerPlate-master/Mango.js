class Mango extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/mango.png");
      this.width=width;
      this.height=height;
    }
  
    display(){
      super.display();
      var mangoPos = this.body.position;

      if(Math.abs(mangoPos.x - stone.position.x)<this.width/2+10  && Math.abs(mangoPos.y - stone.position.y)<this.height/2+10){
        Matter.Body.setStatic(this.body,false);
      }
    }
  };
  