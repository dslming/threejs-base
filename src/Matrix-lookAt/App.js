import Stage from './Stage.js'
import LookAtCameraPlane from './LookAtCameraPlane.js'

window.THREE = THREE

class App {
  constructor() {
    window.lm = this
    this.stage = new Stage("#app")
    this.stage.run()
    let plane = new LookAtCameraPlane(this.stage)
  }
}

window.onload = () => {
  let app = new App()
}
