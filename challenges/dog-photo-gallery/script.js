function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const ul = document.getElementById("ul");
      const li = document.createElement("li");
      li.classList.add("col-md-4");
      li.classList.add("center-block");
      const img = document.createElement("img");
      img.classList.add("img-responsive");
      img.classList.add("img-thumbnail");
      img.classList.add("center-block");
      img.style.height = "300px";
      ul.appendChild(li);
      li.appendChild(img);
      img.src = data.message;
    })
    .catch((error) => {
      console.log(error);
    });
}

const button = document.getElementById("load-more");
button.addEventListener("click", getDog);
