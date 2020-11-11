function renderScoreBoard() {
    let storedUser = localStorage.getItem("User");
    let storedScore = localStorage.getItem("finalscore");
  
    // if (storedUser) {
    //   userInitialFinal = JSON.parse(storedUser);
    
    
    if (storedScore) {
      userScoreFinal = JSON.parse(`${storedUser}` + `${storedScore}`);
      const div = document.createElement("<div>")
      div.appendChild(userScoreFinal);
  
      theScore.appendChild(div);
  
      
    }
  }
  