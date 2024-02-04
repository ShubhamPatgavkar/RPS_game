let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");

const compchoice = () =>{
    let arr = ["rock", "paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return arr[idx];
} 



const playgame = (userchoice) =>{
    const Compchoice = compchoice();
    console.log("computer choice is :", Compchoice);
     let result = document.querySelector("#msg");
     let Uscore = document.querySelector("#uscore");
     let Cscore = document.querySelector("#cscore");
    if(userchoice === Compchoice ){
        result.innerText ="Draw!!";
        result.style.backgroundColor = "blue";
    }
    else if(userchoice === "rock" && Compchoice === "scissor"){
        result.innerText = " Congratulations! You Win !";
        result.style.backgroundColor = "green";
        userscore++;
        Uscore.innerText = userscore;
    }else if(userchoice ==="paper" && Compchoice == "rock"){
        result.innerText =" Congratulations! You Win !";
        result.style.backgroundColor = "green";
        userscore++;
        Uscore.innerText = userscore;
    }
    else if(userchoice==="scissor" && Compchoice === "paper"){
        result.innerText ="Congratulations! You Win !";
        result.style.backgroundColor = "green";
        userscore++;
        Uscore.innerText = userscore;
    }
    else{
        result.innerText="You Lose!";
        result.style.backgroundColor ="red";
        compscore++;
        Cscore.innerText = compscore;
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        console.log("user choice :",userchoice);
        playgame(userchoice);
    })
});