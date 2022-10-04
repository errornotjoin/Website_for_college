var text =document.getElementById("test")
var test1 = document.getElementById("test1")
var text2  =document.getElementById("text1")
var number  = 0
var game = ""
test1.addEventListener("click", function test2()
{
    var test4 = text.value
    rock(test4)
})
function rock(test4)
{
 

 
    number = Math.round(Math.random(3))
    switch(number)
    {
        case 0:
            game = "rock"
        break;
        case 1:
            game = "paper"
        break;
        case 2: 
        game = "Scissors"
        break;
    }
    if(test4 == game)
    {
        text1.innerHTML = "draw"
    }
       
    else if(test4 == "rock" && game == "paper" )
    {
        text1.textcontet = "Player loss (paper wins )"
    }
    else if (test4 == "rock" && game == "Scissors" )
    { text1.innerHTML ="Player Wins (Rock Wins )"}
        
    else if(test4 == "paper" && game == "rock")
    { text1.innerHTML = "player Wins (Paper Wins)"}

    else if(test4 == "scissors" && game == "rock" )
    { text1.innerHTML = "Player loss (Rock wins)"}
        
    else if(test4 == "scissors" && game == "paper")
    { text1.innerHTML ="player Wins (Scissors Wins)"}

    else if(test4 == "paper" && game == "Scissors" )
    { text1.innerHTML = "Player loss (scissors wins)"}
         
}
function color()
{
   var textOne =document.getElementById("textOne")
   var Text_two =document.getElementById("Text_two")
   Text_two.style.backgroundColor = "green"
   textOne.style.backgroundColor = "red"
}
function round()
{
    var Big = document.getElementById("Big")
    var smail = document.getElementById("smail")
    var round = document.getElementById("round")
    round.style.borderRadius = Big.value + "%"
    round.style.height = smail.value + "px"
}