// import * as THREE from './lib/three.module.js'
import Stage from './Stage.js'
import Line from './Line.js'

window.THREE = THREE

class App {
  constructor() {
    window.lm = this
    this.stage = new Stage("#app")
    this.stage.run()
    this.stage.camera.position.set(0, 0, 100)
    // this.line = new Line()
    this.addBox(10)

    var axesHelper = new THREE.AxesHelper(500);
    this.stage.scene.add(axesHelper);
    let helper = new THREE.FaceNormalsHelper(cube, 2, 0x00ff00, 1);
    this.stage.scene.add(helper);

    let runFlag = false

    lm.stage.control.addEventListener("change", () => {
      runFlag = true
    })

    this.stage.onUpdate(() => {
      if (!runFlag) {
        return
      }
      runFlag = false
      // cube.lookAt(this.stage.camera.position)
      // cube.quaternion.copy(lm.stage.camera.quaternion)

      // cube.matrixAutoUpdate = false

      cube.geometry.normalsNeedUpdate = true;
      cube.geometry.computeBoundingSphere()
      cube.geometry.computeFaceNormals()

      let src = cube.position
      let dist = lm.stage.camera.position.clone()
      dist.y = src.y

      // 向量OC
      let dir = new THREE.Vector3()
      dir = dir.subVectors(dist, src)
      dir = dir.normalize()

      // 原始法线
      let normal = cube.geometry.faces[0].normal
      normal.applyMatrix3(cube.normalMatrix.getNormalMatrix(cube.matrixWorld)).normalize();
      let angle = normal.angleTo(dir)
      console.error(normal);

      cube.rotation.y = angle
    })
  }

  addBox(size) {
    var geometry = new THREE.PlaneGeometry(size, size, size);
    var material = new THREE.MeshPhongMaterial({
      // color: 0x63e42a,
      // emissive: 0x072534,
      side: THREE.FrontSide,
      shading: THREE.FlatShading,
      map: new THREE.TextureLoader().load("./bg.png")
    })
    var cube = new THREE.Mesh(geometry, material);
    cube.name = "test_cube"
    window.cube = cube
    this.stage.scene.add(cube)
    // return cube
  }
}

window.onload = () => {
  let app = new App()
}
