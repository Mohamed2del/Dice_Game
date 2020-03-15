randomNumber1 = Math.floor(Math.random() * 6) + 1  
randomNumber2 = Math.floor(Math.random() * 6) + 1  


name1 = "images/dice"+randomNumber1+".png";
name2 = "images/dice"+randomNumber2+".png";


document.getElementsByClassName("img1")[0].setAttribute("src",name1);
document.getElementsByClassName("img2")[0].setAttribute("src",name2);


if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = ("Draw")
}
else if( randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("Player 1 won")
}
else{
    document.querySelector("h1").innerHTML = ("Player 2 won")

}
