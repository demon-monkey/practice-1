var score=0;

function update_score(){
    score=score+1;
    document.getElementById("score1").innerHTML="score:"+ score;
}

function saveScore(){
    localStorage.setItem("scoreKey",score);
}

function nextPg(){
    window.location="activity_2.html";
}