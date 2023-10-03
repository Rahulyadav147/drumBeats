
// ***************Using mouse clicks****************
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var aud;
        var buttonword=this.innerHTML;
        makesound(buttonword);
        buttonAnimation(buttonword);
  
    });
}      
//    **********Using keyboard buttons.******************
// keydown : what actions the function is going to respond to i.e. keypresses::: e(correspons to and event): tells the event that occured such as mouseclick
document.addEventListener("keydown",function(e){ // entire document was used to detect keyboard presses
        makesound(e.key);
        buttonAnimation(e.key);
    });





function makesound(x){
        switch(x){
            case "w":aud=new Audio("./sounds/crash.mp3");aud.play();break;
            case "a" : aud=new Audio("./sounds/kick-bass.mp3");aud.play();break;
            case "s": aud=new Audio("./sounds/snare.mp3");aud.play();break;
            case "d": aud=new Audio("./sounds/tom-1.mp3");aud.play();break;
            case "j": aud=new Audio("./sounds/tom-2.mp3");aud.play();break;
            case "k": aud=new Audio("./sounds/tom-3.mp3");aud.play();break;
            case "l": aud=new Audio("./sounds/tom-4.mp3");aud.play();break;
            default:console.log(buttonword)
        }
    }
    
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);  //  parameter is :  ".currentKey" or".w" which is a class in button 
activeButton.classList.add("pressed");// adds class pressed  to the currently cliked buttion for animation(css file)
setTimeout(function() {
    activeButton.classList.remove("pressed"); // class pressed removed after .1 seconds
    }, 100);
}
