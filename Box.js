class Box{
    constructor(x,y,width,height){
        
        var options ={
            
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,20,100,options);
      
        this.width =width;
        this.height =height;
        World.add(world,this.body);
    }
}