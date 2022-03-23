const appen = (data) => {
  const h2 = document.getElementById('jokeContainer');
  h2.innerHTML = data
}

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appen(data.joke));
};

window.onload = () => fetchJoke();