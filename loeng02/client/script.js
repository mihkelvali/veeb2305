const app = document.querySelector('#app');

fetch('http://localhost:8000')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('õnnestus', data);
    app.innerHTML = `
      Eesnimi: ${data.eesnimi}<br>
      Perenimi: ${data.perenimi}<br>
      <img src="${data.imageUrl}">
    `
  })
  .catch(function() {
    // handle the error
    console.log('ei õnnestunud :/');
  });