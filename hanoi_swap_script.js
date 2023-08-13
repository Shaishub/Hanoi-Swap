var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var result = document.getElementById('result');
var trash1 = document.getElementById('trash_div1');


var swapIN1 = document.getElementById('swapIN1');
//var swapIN2 = document.getElementById('swapIN2');
var swapIN3 = document.getElementById('swapIN3');

let sel_p4 = p4.style.backgroundColor = "#9db29e";
let sel_p5 = p5.style.backgroundColor = "#9db29e";
let sel_p6 = p6.style.backgroundColor = "#9db29e";

let unsel_p4 = p4.style.backgroundColor = "white";
let unsel_p5 = p5.style.backgroundColor = "white";
let unsel_p6 = p6.style.backgroundColor = "white";


if (unsel_p4 && unsel_p5 && unsel_p6){
    swapIN1.disabled = true;
    swapIN3.disabled = true;
} 

function select_box4(){
    if(p4.textContent !== ""){
        swapIN1.disabled = false;
        swapIN3.disabled = true;
        trash1.textContent = p1.textContent
        
        
        p5.style.backgroundColor = "white";
        p6.style.backgroundColor = "white";
        p4.style.backgroundColor = "#9db29e";
    }
}

function select_box6(){
    if(p6.textContent !== ""){
        swapIN1.disabled = true;
        swapIN3.disabled = false;
        trash1.textContent = p1.textContent;
        
        p4.style.backgroundColor = "white";
        p5.style.backgroundColor = "white";
        p6.style.backgroundColor = "#9db29e";
    }
}

var output = document.getElementById('move_score');


function move_out1() {
    
   if(sel_p4){
       p4.style.backgroundColor = "white";
       p5.style.backgroundColor = "white";
       p6.style.backgroundColor = "white";
       
        p1.textContent = p4.textContent;
        p4.textContent = p5.textContent;
        p5.textContent = p6.textContent;
        p6.textContent = p3.textContent;
        p3.textContent = p2.textContent;
        p2.textContent = trash1.textContent;
        
        swapIN1.disabled = true;
        swapIN3.disabled = true;
       
       var count = parseInt(output.textContent);
       moves = count + 1;
       output.textContent = moves;
   }
    
         
}


function move_out3() {
   
   if(sel_p6){
       p4.style.backgroundColor = "white";
       p5.style.backgroundColor = "white";
       p6.style.backgroundColor = "white";
      
       p1.textContent = p6.textContent;
       p6.textContent = p3.textContent;
       p3.textContent = p2.textContent;
       p2.textContent = trash1.textContent;
       
       swapIN1.disabled = true;
       swapIN3.disabled = true;
       
       var count = parseInt(output.textContent);
       moves = count + 1;
       output.textContent = moves;
   }
         
}

function reveal_result() {
    var A = parseInt(p1.textContent);
    var B = parseInt(p2.textContent);
    var C = parseInt(p3.textContent);
    var sum = 0;
    
    if(result.textContent == " "){
        sum = A + B + C;
        result.style.color = "#aee3ae";
        result.textContent = sum;
        
    }
}









