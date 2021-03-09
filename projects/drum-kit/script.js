const soundUrls = {
  65: new Audio("https://freesound.org/data/previews/543/543499_3797507-lq.mp3"),
  83: new Audio("https://freesound.org/data/previews/207/207956_19852-lq.mp3"),
  68: new Audio("https://freesound.org/data/previews/111/111202_1853660-lq.mp3"),
  70: new Audio("https://freesound.org/data/previews/173/173838_1954411-lq.mp3"),
  71: new Audio("https://freesound.org/data/previews/270/270091_1125482-lq.mp3"),
  72: new Audio("https://freesound.org/data/previews/240/240213_92082-lq.mp3")
}

const keyElements = document.getElementsByClassName("key");

const pressedKey = e => {
  document.querySelector("[data-key='" + e.which + "']").classList.add("press");
  soundUrls[e.which].play();
};

const removeTransition = () => {
  Array.from(keyElements).forEach(e => {
    e.classList.remove("press");
  });
};

window.addEventListener("keyup", pressedKey);
Array.from(keyElements).forEach(e => {
  e.addEventListener("transitionend", removeTransition);
});

document.getElementById("show-credits").addEventListener("click", function(event) {
  const creditList = document.querySelector(".credit-list");
  const creditClassList = creditList.classList;
  const button = document.getElementById("show-credits");
  if (![...creditClassList].includes("visible")) {
    creditClassList.add("visible");
    button.innerHTML = "Hide Credits";
  }
  else {
    creditClassList.remove("visible");
    button.innerHTML = "Show Credits";
  }
});