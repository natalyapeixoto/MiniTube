
const input = document.getElementById("search");
const result = document.getElementById("results")
function videoYoutube() {
  result.innerHTML = `<img id="loading" src="loading.gif">`
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${apiKey}&q=${input.value}`)
  .then(function(data){

   return data.json().then(function(data){
    result.innerHTML = ""
    if(data.items.length === 0){
      result.innerHTML = `Nenhum resuldado encontrado :( `
   }else{
    for (const item of data.items){
      result.innerHTML += `
      <a href="https://www.youtube.com/watch?v=${item.id.videoId}">
        <img src="${item.snippet.thumbnails.default.url}">
        <div class="description">
            <h3>${item.snippet.title}</h3>
            <p class="description">${item.snippet.description}</p>
        </div>
      </a>`
    }
    if(input.value.length === 0){
       result.innerHTML = ""
    }
   }})
  }).catch(function(error){
    result.innerHTML = `${error}<p>
    Ora bolas!A busca retornou esse errinho aí.</p>`
  })
}
input.addEventListener("keyup", videoYoutube)
