let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset-btn");
let msg= document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newgamebtn= document.querySelector(".newgamebtn")
let winPattern= [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

let turnO=true;

// event listner on all the boxes



// const resetfun =()=>{
// turnO=true;
//  enableboxes();
// boxes.innerText="";

// }




const disableboxes=()=>{
for(let box of boxes ){
    box.disabled=true;
}

}

const enableboxes=()=>{
for(let box of boxes ){
    box.disabled=false;
}

}





boxes.forEach((box)=>{

box.addEventListener("click",()=>{

if(turnO==true){
    box.innerText="O";
    turnO=false;
}else{
    box.innerText="X";
    turnO=true;
}
box.disabled=true;
checkwiner();


})

})

let winner= (pos1)=>{

msg.innerText=`Congratulations, the Winner is: ${pos1}`;
msgcontainer.classList.remove("hide");
disableboxes();

}


const checkwiner=()=>{
    for(let pattern of winPattern){
let pos1= boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;

if(pos1!="" && pos2!="" && pos3!=""){

if(pos1===pos2&&pos2===pos3){

console.log("Winner:" ,pos1)
winner(pos1);

}

}

    }
}

 resetbtn.addEventListener("click",()=>{
turnO=  true;
enableboxes();
for(let box of boxes){
box.innerText="";

}
msgcontainer.classList.add("hide");

    console.log("reset button was clicked")
 })



 newgamebtn.addEventListener("click",()=>{
turnO=true;
        enableboxes();

    for(let box of boxes){
        box.innerText="";


    }
    msgcontainer.classList.add("hide");


 })