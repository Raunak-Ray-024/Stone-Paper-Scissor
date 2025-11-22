let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["stone","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
    //rock paper scissor
};

const drawgame=()=>{
    // console.log("game draw");
    msg.innerText="DRAW";
    msg.style.backgroundColor="yellow";
};

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        // console.log("you win");
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="pink";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        // console.log("computer win");
        msg.innerText="COMPUTER WIN";
        msg.style.backgroundColor="green";
    }
}

const playgame = (userchoice) =>{
    console.log("user choice=",userchoice);
    //computer choice
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);

    if (userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
        } else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="stone"?false:true;
        }
        showwinner(userwin);

    }
};

choices.forEach((choice)=>{ //individual choice selection
    choice.addEventListener("click",()=>{ //click pe response karega
        const userchoice=choice.getAttribute(("id"));
        playgame (userchoice);
    });
});