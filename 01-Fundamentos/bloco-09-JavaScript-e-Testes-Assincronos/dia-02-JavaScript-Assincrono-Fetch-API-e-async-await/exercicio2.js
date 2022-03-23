const appen = (data) => {
  const ol = document.getElementById('ol-list');
  const li = document.createElement('li');
  li.innerHTML = `${data.name} (${data.symbol}): ${data.value} `;
  ol.appendChild(li);
}

const fetchCrypto = () => {
  const url = `https://api.coincap.io/v2/assets`;
  return fetch(url)
  .then(response => response.json())    
  .then(data => {
    data.data.filter(coin => {
      if (coin.rank <= 10) {
      const coins = {
        name: coin.name,
        symbol: coin.symbol,
        value: parseFloat(coin.priceUsd).toFixed(2)
      }
      return appen(coins);
    }
    })
  })
}
fetchCrypto();