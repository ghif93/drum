var drum = document.querySelectorAll(".drum");
var drumLen = document.querySelectorAll(".drum").length;



for (var i= 0;i<drumLen;i++){
   
    drum[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonEffect(buttonInnerHTML);
    });

}

document.addEventListener("keydown",function(event){
       
    var letters = ['w','a','s','d','j','k','l'];
    var x = false;
    for(var i =0; i<letters.length;i++){
        if(letters[i] === event.key){
            x = true;
            break;
        }
    }
        
    if (x){
        playSound(event.key);
        buttonEffect(event.key);
    } else{
        return (console.log("wrong key"));
    }

});



function playSound(key){
    switch (key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
            
            default:
                console.log(event.key);
    }

    
}

function buttonEffect(key){


   var element = document.querySelector("."+key);
   element.classList.add("buton-effect");

 setTimeout(function(){
   element.classList.remove("buton-effect");
},100)

}