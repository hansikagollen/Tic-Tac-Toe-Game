
// accessing HTML elements 
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#newgame");
let count=0;

let turnO=true; //x or o


// defining winnig pattern
const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
  


// adding event for each box to have X or O on clicking
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if (turnO){  //player O
            box.innerText="0";
            turnO=false;
        }else{
            box.innerText="X";   //player x
            turnO=true;;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }

        
    });
});





  //function for disabling button
disableAllBtn=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};


//function for enable button
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};

//showing winner on screen
const showWinner=(winner) => {
    msg.innerText =`Congratulations,Winner is ${winner}`;
    msg.style.fontSize='50px';
    msgContainer.classList.remove("hide");
    disableAllBtn();
};

//checking who is winner
const checkWinner = () =>{
    for (let pattern of winning_pattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if (val1!="" && val2!="" && val3!=""){
            if (val1===val2 && val2===val3){
                // won=true;
                showWinner(val1);
                // disapleBtn()
                return true;
            }

        }
        console.log(count);
    }
};

//draw case
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };



//function for reset game and new game  
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
