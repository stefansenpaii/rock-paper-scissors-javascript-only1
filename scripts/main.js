function computerPlay(){
    let niz=["rock","paper","scissors"];
    let napad=Math.floor((Math.random() * 3) + 1);
    if(napad===1)
    {
        return niz[0];
    }
    else if(napad===2)
    {
        return niz[1];
    }
    else if(napad===3)
    {
        return niz[2];
    }
}
function playRound(playerSelection,computerSelection){
    if(computerSelection===playerSelection)
    {
        console.log("Tied");
        t=t+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        console.log("You Lose");
        l=l+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="rock" && computerSelection==="scissors")
    {
        console.log("You Win");
        w=w+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="paper" && computerSelection==="scissors")
    {
        console.log("You Lose");
        l=l+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="paper" && computerSelection==="rock")
    {
        console.log("You Win");
        w=w+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="scissors" && computerSelection==="rock")
    {
        console.log("You Lose");
        l=l+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else if(playerSelection==="scissors" && computerSelection==="paper")
    {
        console.log("You Win");
        w=w+1;
        console.log("Wins: "+w + " Loses: "+l + " Ties: "+t);
    }
    else
    {
        console.log("!!!WRONG INPUT!!!");
    }

}
var w=0;
var t=0;
var l=0;
alert("To see the output and results, first press 'OK' then 'cancel' \nthen right click and 'Inspect' and go to 'Console' \nand refresh page. Enjoy! :)")
while(1>0)
{
    let playerSelection = prompt("Type: rock or paper or scissors \nto play!");
    playerSelection=playerSelection.toLowerCase();
    const computerSelection=computerPlay();
    playRound(playerSelection,computerSelection);
    if(w===5)
    {
        console.log("You WON the game!! CONG!!");
        break;
    }
    else if(l===5)
    {
        console.log("You lost the game! Try again!");
        break;
    }
}
