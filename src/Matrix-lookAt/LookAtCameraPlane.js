// 一直朝向相机的平面
// 整个空间Y轴朝上
// 相机每次旋转平面都绕着y轴朝向相机
let oldDir =  new THREE.Vector3()

export default class LookAtCameraPlane {

  constructor(stage) { 
    this.stage = stage
    this.stage.camera.position.set(0, 50, 50)

    this.mesh = this.addPlane(20)
    this.addHelp()

    this.stage.onUpdate(() => {
      // 方法1
      // this.mesh.lookAt(this.stage.camera.position)
    
      // 方法2
      // this.mesh.quaternion.copy(this.stage.camera.quaternion)

      // 方法3
      this.setMeshLook()
    })
  }

  addHelp() {
    var axesHelper = new THREE.AxesHelper(500);
    this.stage.scene.add(axesHelper);
    let helper = new THREE.FaceNormalsHelper(this.mesh, 2, 0x00ff00, 1);
    this.stage.scene.add(helper);
  }

  setMeshLook() {
    let src = this.mesh.position
    let dist = this.stage.camera.position.clone()
    dist.y = src.y

    // 向量OC
    let dir = new THREE.Vector3()
    dir = dir.subVectors(dist, src)
    dir = dir.normalize()

    if(this.isEquals(oldDir,dir,0.01 )) {
      return
    }
    oldDir.copy(dir)

    // 原始法线
    let normal = this.mesh.geometry.faces[0].normal

    // 经过矩阵变换后的法线,必须只执行一次
    // 方法失败
    // let normalTrans = normal.applyMatrix3(cube.normalMatrix.getNormalMatrix(cube.matrixWorld)).normalize();
    // let angle = normalTrans.angleTo(dir)

    let angle = normal.angleTo(dir)
    let flag = this.isLeft(normal, dir)
    // console.error("flag:", flag,",n:",normal, ",dir:", dir);
    let finalAngle = flag > 0 ? angle:-angle
    this.mesh.rotation.y = finalAngle
  }

  isEquals(a,b,d) {
    a = a.clone()
    b = b.clone()
    let t  = a.distanceTo(b)
    return t<d ? true:false
  } 

  // b是否在a的左侧
  isLeft(a,b) {
    a = a.clone()
    b = b.clone()
    
    a.y = 0
    b.y = 0
    a.cross(b)

    let ret = a.y > 0 ? 1: 0
    return ret
  }

  addPlane(size) {
    var geometry = new THREE.PlaneGeometry(size, size, size);
    var material = new THREE.MeshPhongMaterial({
      side: THREE.FrontSide,
      shading: THREE.FlatShading,
      map: new THREE.TextureLoader().load("./bg.png")
    })
    var mesh = new THREE.Mesh(geometry, material);
    mesh.name = "LookAtCameraPlane"
    window.mesh = mesh
    this.stage.scene.add(mesh)
    return mesh
  }
}
