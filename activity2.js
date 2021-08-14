function back_b(){
    window.location="activity_1.html";

}

function getScore(){
    score=localStorage.getItem("scoreKey");
    document.getElementById("score").innerHTML="score:" +score;

}