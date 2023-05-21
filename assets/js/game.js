// Starts the game when the onclick of startGame is clicked
function startGame() {
  //Hides the start page
  document.getElementById("homepage").style.display = "none";
  //Generates the questions
  document.getElementById("questions").style.display = "block";

  console.log("Game has started!");
}
