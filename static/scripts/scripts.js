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

<<<<<<< Updated upstream
=======
class Typewriter {
  constructor(targetSelector, userSettings) {
    const defaultSettings = {
      cursorDelay: 500,
      typingDelay: 300,
      deleteDelay: 200
    }
    this.settings = {
      ...defaultSettings,
      ...userSettings
    }
    this.targetSelector = targetSelector
  }

  async type(string) {
    const target = document.querySelector(this.targetSelector)
    let counter = 0
    await new Promise((res)=>{
      let interval = setInterval(()=>{
        target.innerHTML += string[counter]
        counter++
        if (counter === string.length) {
          res(()=>this)
          clearInterval(interval)
        }
      }, this.settings.typingDelay)
    })
  }

  async delete(number) {
    const target = document.querySelector(this.targetSelector)
    let counter = 0
    await new Promise((res)=>{
      let interval = setInterval(()=>{
        target.innerHTML = target.innerHTML.slice(0, -1)
        counter++
        if (counter === number) {
          res()
          clearInterval(interval)
        }
      }, this.settings.deleteDelay)
    })
  }
  
  blink() {
    const target = document.querySelector(this.targetSelector)
    let cursor = document.createElement("span")
    cursor.innerHTML = "|"
    target.append(cursor)
    setInterval(()=>{
      cursor.classList.toggle("hidden")
    }, this.settings.cursorDelay)
  }
}

const t = new Typewriter(".motto")
t.type("Minimal and")
  .then(() => t.delete(3))
  .then(() => t.type("IS effective"))
  .then(() => t.blink())

>>>>>>> Stashed changes
/*(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/