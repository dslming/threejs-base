// import * as THREE from './lib/three.module.js'
import Stage from './Stage.js'
import Floor from './Floor.js'

window.THREE = THREE

class App {
  constructor() {
    window.lm = this
    this.stage = new Stage("#app")
    this.stage.run()
    this.line = new Floor(this.stage)
    // this.addBox(10)
  }

  addBox(size) {
    var geometry = new THREE.BoxGeometry(size, size, size);
    var material = new THREE.MeshPhongMaterial({
      color: 0x63e42a,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
    })
    var cube = new THREE.Mesh(geometry, material);
    cube.name = "test_cube"
    this.stage.scene.add(cube)
    // return cube
  }
}

window.onload = () => {
  let app = new App()
}
