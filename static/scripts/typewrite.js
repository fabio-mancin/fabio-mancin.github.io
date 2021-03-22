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