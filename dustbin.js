class Dustbin {
    //constructor is automatically called when a object is created useing this class. this key word reffers to the object that is being created
    constructor(x,y,w,h){
    var options={
        isStatic:true
      }    
    this.body =Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width=w;
    this.height=h;
    }  
    display(){
    var pos=this.body.position;   
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    rotate (angle);
    fill("white");
    rectMode(CENTER);  
    rect(0,0,this.width,this.height);  
    pop ();
    }  
    }