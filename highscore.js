let Score = document.querySelector("#box");
let form = document.querySelector(".scoreboard");
let userScoreFinal = JSON.parse(window.localStorage.getItem("myScore"));
const clearScores = document.getElementById("clearscores");

console.log(userScoreFinal);

clearScores.addEventListener("click", eraseBoard);


function eraseBoard(e) {
  e.preventDefault();
  localStorage.clear();
  Score = userScoreFinal.length
}




  userScoreFinal.forEach(function (i) {
    
    
  var li = document.createElement("li");
  li.textContent = `${i.Int}: ${i.score}` ;
  li.className = "white";
  
  console.log(i)
  
  
  
  
  
  
  
  
  
  
  Score.appendChild(li)
  // buildRow({
    //   position: i + 1,
    //   Int: myScore.Int,
    //   score: myScore.score,
    // })
    // );
  });

  
  