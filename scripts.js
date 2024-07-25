
var randomNumber1 =  Math.floor(Math.random() * 6 + 1);
var randomNumber2 =  Math.floor(Math.random() * 6 + 1);

// RandomNumber1
var  randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

// RandomNumber2
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomImageSrc);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player Number 1 wins";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player Number 2 wins";
}else{
    document.querySelector("h1").innerHTML = "The Game is Draw";
}