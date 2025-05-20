
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to load a joke. Try again!";
    });
}
