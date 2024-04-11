//Initialize scores for Team A and Team B
let teamAScore = 0;
let teamBScore = 0;

//Get references to the HTML elements that displays the scores
let teamAScoreValue= document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");


// //Winner
// function getWinner() {
//     if (teamAScore === 10 || teamBScore === 10) {
//         let winner = (teamAScore === 10) ? 'TeamA' : 'TeamB';
//         let winnerTitle = document.createElement("h2");
//         winnerTitle.textContent = "¡" + winner + " ha ganado!";
//         document.querySelector(".scoreboard").appendChild(winnerTitle);
//         // Deshabilitar botones de incremento y decremento después de que se haya determinado un ganador
//         document.querySelectorAll(".btn-container button").forEach(button => {
//             button.disabled = true;
//         });
//     }
// }


//function to increment the score for a giben team 
let incrementScore = (team) => {
    if (team ==='teamA'){
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
    }else if(team === 'teamB'){
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
};

//Function to decrement the score for a given team

let decrementScore = (team) => {
    if (team ==='teamA' && teamAScore > 0){
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
    }else if(team === 'teamB' && teamBScore > 0){
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
};

//Function Reset

let resetScores = () =>{
     teamAScore = 0;
     teamBScore = 0;
     teamAScoreValue.textContent = teamAScore;
     teamBScoreValue.textContent = teamBScore;
}
