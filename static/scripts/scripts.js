if (window.innerWidth < 1024) {
  document.querySelector("li").addEventListener("click", () => {
    [...document.querySelectorAll(".dropdown-nav")].forEach((e, i) => {
      e.classList.toggle("hidden")
      e.classList.toggle("animate__animated")
      e.classList.toggle("animate__backInRight")
      e.classList.toggle(`animate__delay-${i}s`)
    });
  })
} else {
  [...document.querySelectorAll("li")].forEach(e => e.classList.toggle("hidden"));
}

[...document.querySelectorAll(".skill img")].forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    if (e.target.width > "44.9999") {
      e.target.animate([{
        width: "30px",
        height: "30px"
      }], {
        duration: 500,
        fill: "forwards"
      });
      const bar = e.target.nextElementSibling
      bar.classList.remove("hidden")
      bar.animate([{
        opacity: 1,
        height: `60px`
      }], {
        duration: 500,
        fill: "forwards"
      });
    }
  })
})

class Typewriter {
  constructor(targetSelector, userSettings) {
    const defaultSettings = {
      cursorDelay: 500,
      typingDelay: 1000
    }
    this.settings = {
      ...defaultSettings,
      ...userSettings
    }
    this.targetSelector = document.querySelector(targetSelector)
  }
  typeString(string) {
    return new Promise((res, err) => {
      let counter = 0
      let interval = setInterval(function(){
        this.targetSelector.innerHTML += string[counter]
        counter++
        if (counter === string.length) {
          res(()=>{return this})
          clearInterval(interval)
        }
      }, this.settings.typingDelay)
    })
  }
  deleteChars(number) {
    return new Promise((res, err) => {
      let counter = 0
      let interval = setInterval(function(){
        this.targetSelector.innerHTML = this.targetSelector.innerHTML.slice(0, -1)
        counter++
        if (counter === number) {
          res(()=>{return this})
          clearInterval(interval)
        }
      }, this.settings.typingDelay)
    })
  }
  blinkCursor() {
    let cursorElement = document.createElement("span")
    cursorElement.innerHTML = "|"
    this.targetSelector.innerHTML += cursorElement
    setInterval(function(){
      cursorElement.classList.toggle("hidden")
    }, this.settings.cursorDelay)
  }
}

/*(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/