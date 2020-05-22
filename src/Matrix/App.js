// import * as THREE from './lib/three.module.js'
import Stage from './Stage.js'
import Line from './Line.js'

window.THREE = THREE

class App {
  constructor() {
    window.lm = this
    this.stage = new Stage("#app")
    this.stage.run()
    this.line = new Line(this.stage)
  }
}

window.onload = () => {
  let app = new App()
}
