
const fetchChuckNorrisQuotesJSON = () => {
 
    const chuckNorrisId = "H3ohJniuTVqdTouOZ1Evew"; 
    const url = `https://api.chucknorris.io/jokes/random/`;
    fetch(url)
        .then(res => res.json())
        
      .then(ChuckNorris => {
        const ChuckNorrisHtml = `
          <p>${ChuckNorris.value}</p>
          <img src="${ChuckNorris.icon_url}"/>
        `;
        document.querySelector('#chuck-norris').innerHTML = ChuckNorrisHtml;
      });

  }
  document.getElementById("Button").addEventListener("click", fetchChuckNorrisQuotesJSON)
  fetchChuckNorrisQuotesJSON();