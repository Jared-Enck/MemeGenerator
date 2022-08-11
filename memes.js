const memeForm = document.querySelector(".meme-form");
const enteredURL = document.querySelector(".url");
const topValue = document.querySelector(".top");
const botValue = document.querySelector(".bottom");
const memeContainer = document.querySelector(".meme-container");

const createMeme = function () {
  const newMeme = document.createElement("div");
  newMeme.classList.add("new-meme");
  const trashBin = document.createElement("div");
  trashBin.setAttribute("id", "trash");
  const trashBttn = document.createElement("button");
  const memeImg = document.createElement("img");
  memeImg.classList.add("img");
  memeImg.setAttribute("src", `${enteredURL.value}`);
  const topText = document.createElement("div");
  const botText = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.innerText = `${topValue.value}`;
  botText.setAttribute("id", "botText");
  p2.innerText = `${botValue.value}`;
  trashBttn.innerText = "X"
  trashBin.appendChild(trashBttn);
  memeContainer.appendChild(newMeme);
  newMeme.append(memeImg, topText, botText, trashBin);
  topText.append(p1);
  botText.appendChild(p2);
  trashBttn.addEventListener('click', function(){
    trashBin.parentElement.remove();
  })
};

function submitted (e) {
  e.preventDefault();
  if (!enteredURL.value) {
    return;
  } else {
    createMeme();
    const inputs = document.querySelectorAll(".url, .top, .bottom");
    inputs.forEach((input) => {
      input.value = "";
    });
  }
};

memeForm.addEventListener("submit", submitted);

document.addEventListener("click", function (e) {
  console.log(e.target);
});
