//1 write a class to create the default size of ball
//2 create a starting point for the drawing of the canvas
//3 write other instances to update the features of each type of ball
//4 write a code to update the colour
//5 write a code to update the sizes
//6 write a code to draw many balls on the same canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let colour = document.getElementById('colour');
let radius = document.getElementById('radius');
let button = document.getElementById('button');
let balls = document.getElementById('balls');
let slideText = document.getElementById('show')
console.log(radius.value);
slideText.innerHTML = radius.value
let drawRadius = 0
let drawRadiusY = 0
let drawRadiusX = 0
let Radius ;
let widthCkecker ;
let heightChecker;
let specificColour;
let RadiusY = 0;
let radiusAdder = 0;
radius.addEventListener('mouseup',((key)=>{
    slideText.innerHTML = radius.value
    console.log(radius.value)
}))
// console.log(balls)
button.addEventListener('click',((event)=>{
  parentClass()
}));



let parentClass = (()=>{
    // try{
    //     if((JSON.parse(Radius)) > 60){
    //         throw new Error('invalid radius...enter between 0 to 60');
    //     }
    // }
    // catch(error){
    //  alert(error.message)   
    // }
    
    
    Radius = radius.value;
    widthCkecker = (canvas.width)-350;
    heightChecker = (canvas.height)-200;
    specificColour = colour.value
    radiusAdder = radiusAdder;
    
    // console.log(colour.value);
    console.log(widthCkecker);
    console.log(heightChecker);
    console.log(drawRadius)
    if(drawRadius >= widthCkecker){
        drawRadius = 0;
        radiusAdder = radiusAdder + 90     
    }
    RadiusY = radiusAdder + (1.1 *(JSON.parse(Radius)));
    drawRadius = drawRadius + (1.5 *(JSON.parse(Radius)));
    drawRadiusX = drawRadius
    drawRadiusY = RadiusY
    // console.log(drawRadiusX)
    // console.log(drawRadiusY)
    console.log(drawRadius)

    
    // console.log(drawRadiusX)
    // console.log((drawRadiusX)+50)
    // console.log(drawRadius)
    // drawRadius = drawRadius + (1.5 *(JSON.parse(Radius)));
    console.log(drawRadiusY)
    console.log(drawRadiusX)
    let ball = balls.value;
   
   if(drawRadiusY<= heightChecker){
        
        class Ball {
            constructor(type,colour,x,y,radius){
            this.type = type;
            this.colour = colour;
            this.radius = radius;
            this.x = x;
            this.y = y;
            };
        
        };
    
        class FIFA extends Ball {
            constructor(type,colour,x,y,radius){
            super(type,colour,x,y,radius);
            this.texture = 'hehe';
            //  console.log(typeof this.type)
            };

            drawBall(){
                context.beginPath();
                context.fillStyle = this.colour;
                console.log(this.y);
                console.log(this.x);
                // console.log(canvas.width);
                context.arc(this.x,this.y,this.radius,0,2 * Math.PI,true);
                context.fill();
                context.fillStyle = 'black';

                if(this.type === 'FIFA'){
                context.font = `${(this.radius)/2}px Ariel`;
                }else{
                    context.font = `${(this.radius)/2.5}px Ariel`;
                }

                context.fillText(this.type,(this.x)- ((this.radius)-10) , this.y);
            }
        }

        let fifa = new FIFA(ball,specificColour,drawRadiusX*1.4,drawRadiusY*1.5,Radius);
        fifa.drawBall();
        // console.log(fifa.radius);
   }else{
       canvas.clear()
   }
});