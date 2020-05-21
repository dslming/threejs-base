export default class Line {
  constructor(stage) {
    this.box = this.addBox(3)

    let helper = new THREE.FaceNormalsHelper( this.box, 2, 0xff0000, 1 );

     // 坐标系helper
     // 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
     let axis = new THREE.AxesHelper(10000);
     stage.scene.add(axis);

    stage.scene.add(this.box)
    stage.scene.add(helper)

    stage.onUpdate(()=>{
      // this.box.lookAt(stage.camera.position)
      this.setMeshLook({model: this.box, camera: stage.camera})
    })
   }

  addBox(size) {
    var geometry = new THREE.PlaneGeometry(size, size, size);
    var material = new THREE.MeshPhongMaterial({
      color: 0x63e42a,
      side: THREE.FrontSide,
      shading: THREE.FlatShading
    })
    var cube = new THREE.Mesh(geometry, material);
    cube.name = "test_cube"
    return cube
  }

  setMeshLook({ model ,camera}) {
    // https://stackoverflow.com/questions/12919638/textgeometry-to-always-face-user
    // lm.line.box.geometry.normalsNeedUpdate = true
    // let pos = model.position.clone();
    // let father = model;
    // let camPos = camera.position.clone();
    // camPos = father.worldToLocal(camPos);
    // camPos.y = pos.y;

    // let dir = camPos.sub(pos)
    // dir = dir.normalize()
    // let normal = lm.line.box.geometry.faces[0].normal

    // let angle = normal.angleTo(dir)
    // console.error(angle)

    // let q = new THREE.Quaternion();
    // q.setFromAxisAngle(new THREE.Vector3(0,1,0), angle)
    // lm.line.box.rotation.set(0,angle,0)
    // lm.line.box.quaternion.copy(q)
    // let matrix = new THREE.Matrix4();
    // matrix.lookAt(camPos, pos, new THREE.Vector3(0, 0, 1));
    
    // model.matrix.elements[0] = matrix.elements[0] 
    // model.matrix.elements[1] = matrix.elements[1]
    // model.matrix.elements[4] = matrix.elements[8]
    // model.matrix.elements[5] = matrix.elements[9]
    // model.matrixAutoUpdate = false;

    model.quaternion.copy(camera.quaternion);
    // model.lookAt(camera.position)
  }
}
