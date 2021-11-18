function getLatestComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((emre) => {
      console.log(emre);
      const img = document.createElement("img");
      img.src = emre.img;
      const col = document.querySelector(".col-md-12");
      col.appendChild(img);
    })
    .catch((error) => console.log(error));
}

getLatestComic();