export default class Line {
  constructor(stage) {
    this.box = this.addBox(3)
    stage.scene.add(this.box)
   }

  addBox(size) {
    var geometry = new THREE.BoxGeometry(size, size, size);
    var material = new THREE.MeshPhongMaterial({
      color: 0x63e42a,
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
    })
    var cube = new THREE.Mesh(geometry, material);
    cube.name = "test_cube"
    return cube
  }
}
