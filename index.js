let buttons=document.querySelectorAll(".cell");
let winning=document.getElementById("winning");
let winner_box=document.getElementById("winner");
//var v="X";
var player_1="X";
var player_2="O";
var turn=true;
let content={};
let tie=0;
let array=[];
let LengthoftheButtons=buttons.length;
let winner=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
function start_game(){
document.getElementById("title").style.cssText="margin-top:-70px";
document.getElementById("players").style.cssText="margin-top:130px; flex-direction: row;";
document.getElementById("board").style.cssText="visibility: inherit";
document.getElementById("reset").style.cssText="visibility: inherit";
document.getElementById("reset").innerHTML="Reset";
buttons.forEach((cell)=>{
cell.addEventListener("click",handleGame,{once:true})
})}
function handleGame(e){
    const c=e.target;
   handleClick(c);
   
    
}
function handleClick(c){
    let currentCell;
    let p1=document.getElementById("player_1").value;
    let p2=document.getElementById("player_2").value;
    if(turn){
        c.innerHTML=player_1;
        turn=false;
        currentCell=player_1;
        tie+=1;
        if(chickWinner(currentCell))
        {
            winning.style.cssText=" visibility: inherit";
         winner_box.innerHTML=p1+" Won!"+"<button id='restart' class='restart' onclick='restart()'>Restart</button>";
        }
        if(tie==9){
            winning.style.cssText=" visibility: inherit";
            winner_box.innerHTML="Tie!"+"<button id='restart' class='restart' onclick='restart()'>Restart</button>";
        }
        return
        }
        if(!turn){
            c.innerHTML=player_2;
            turn=true;
            tie+=1;
           currentCell=player_2;
           if(chickWinner(currentCell))
           {
            winning.style.cssText=" visibility: inherit";
            winner_box.innerHTML=p2+" Won!";
           }
           if(tie==9){
            winning.style.cssText=" visibility: inherit";
            winner_box.innerHTML="Tie!"+"<button id='restart' class='restart' onclick='restart()'>Restart</button>";
        }
            return
            }
           
        }
function chickWinner(currentCell){
return winner.some(com =>{
    return com.every(index =>{
    return buttons[index].innerHTML==currentCell ;
    })
})
}
function restart(){

 location.reload();
}



