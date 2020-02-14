var characters=[
{ name:"Sonic",
  speed: 75,
  handling:20,
},
{ name:"Goku",
  speed: 9001,
  handling:30,
}, 
{ name:"Sans",
  speed: 10,
  handling:90,
},
];

var racers =[];
function racer(name, speed, handling){

var that = this;  
this.name = name;
this.speed = speed;
this.handling = handling;

this.ele=document.createElement("div");    
  
this.ele.style.height="125px";
this.ele.style.width="350px";
this.ele.style.backgroundColor="blue";
this.ele.style.color= "White"  
this.ele.style.display="flex";
this.ele.style.justifyContent="center";
this.ele.style.alignItems="center";  
 
this.ele.innerHTML="Racer: "+this.name +"<br> Speed: "+this.speed+"<br> Handling: "+this.handling;  
  
this.ele.addEventListener("click", function(){
 that.increaseNumber();
  })
  
document.body.appendChild(this.ele);
}

racer.prototype.increaseNumber = function(){
this.speed=this.speed + 5;
 
  if(this.handling >= 1){
     this.handling = this.handling - 2;
     this.ele.innerHTML="Racer: "+this.name +"<br> Speed: "+this.speed+"<br> Handling: "+this.handling; 
    }
 if(this.handling <= 1){
    this.handling =1;
    this.ele.innerHTML="Racer: "+this.name +"<br> Speed: "+this.speed+"<br> Handling: "+this.handling; 
    this.ele.style.border = "red solid 10px";
    } 
 }
for(var i=0; i<characters.length; i++){
  racers.push(new racer(characters[i].name,characters[i].speed,characters[i].handling));
}

 //if(this.handling == 1){
  //this.ele.innerHTML="Racer: "+this.name +"<br> Speed: "+this.speed+"<br> Handling: "+1; 
  //this.elem.style.border = "red solid 10px";
 //}