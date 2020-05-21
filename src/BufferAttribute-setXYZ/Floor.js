export default class Floor {
  constructor(stage) {
    this.scene = stage.scene
    this.addFloor()
  }

  addFloor() {
    // floor
    var floorGeometry = new THREE.PlaneBufferGeometry(20, 20, 1, 1);
    // floorGeometry.rotateX(- Math.PI / 2);

    var position = floorGeometry.attributes.position;

    // 4个顶点
    // console.error(Object.assign({}, position));
    var vertex = new THREE.Vector3()
    var color = new THREE.Color()

    // 顶点位移
    for (var i = 0, l = position.count; i < l; i++) {
      vertex.fromBufferAttribute(position, i);
      vertex.x += Math.random() * 20 - 10;
      vertex.y += Math.random() * 2;
      position.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    // 确保每个面都有唯一的顶点
    // toNonIndexed: 将索引坐标点转为三角面使用的顶点
    floorGeometry = floorGeometry.toNonIndexed();
    position = floorGeometry.attributes.position;
    // 6个点的, 2个三角面
    // console.error(Object.assign({}, position));

    var colors = [];
    for (var i = 0, l = position.count; i < l; i++) {
      color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
      colors.push(color.r, color.g, color.b);
    }
    floorGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    var floorMaterial = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    this.scene.add(floor);
  }
}
