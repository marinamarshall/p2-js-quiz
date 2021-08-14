// https://www.youtube.com/watch?v=o3MF_JmQxYg)
// Get reference to element with id finalScore
const finalScore = document.getElementById("finalScore");

// Get item from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");

// Set text of finalScore element
finalScore.innerText = mostRecentScore;