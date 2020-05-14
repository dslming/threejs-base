### BufferGeometry

#### 1、属性概览
```ts
.attributes : Object
.boundingBox : Box3
.boundingSphere : Sphere
.drawRange : Object
.groups : Array
.id : Integer
.index : BufferAttribute
.isBufferGeometry : Boolean
.morphAttributes : Object
.name : String
.userData : Object
.uuid : String
```

#### 2、方法概览
```ts
setAttribute(name : String, attribute : BufferAttribute ) : BufferGeometry
addGroup (start : Integer, count : Integer, materialIndex : Integer ) : null
applyMatrix ( matrix : Matrix4 ) : null
center () : BufferGeometry
clone () : BufferGeometry
copy ( bufferGeometry : BufferGeometry ) : BufferGeometry
clearGroups ( ) : null
computeBoundingBox () : null
computeBoundingSphere () : null
computeVertexNormals () : null
dispose () : null
fromDirectGeometry ( Geometry : Geometry ) : BufferGeometry
fromGeometry ( Geometry : Geometry ) : BufferGeometry
getAttribute ( name : String ) : BufferAttribute
getIndex () : BufferAttribute
lookAt ( vector : Vector3 ) : BufferGeometry
merge ( bufferGeometry : BufferGeometry, offset : Integer ) : null
normalizeNormals () : null
deleteAttribute ( name : String ) : BufferAttribute
rotateX ( radians : Float ) : BufferGeometry
rotateY ( radians : Float ) : BufferGeometry
rotateZ ( radians : Float ) : BufferGeometry
scale ( x : Float, y : Float, z : Float ) : BufferGeometry
setIndex ( index : BufferAttribute ) : null
setDrawRange ( start : Integer, count : Integer ) : null
setFromObject ( object : Object3D ) : BufferGeometry
setFromPoints ( points : Array ) : BufferGeometry
toJSON () : Object
toNonIndexed () : BufferGeometry
translate ( x : Float, y : Float, z : Float ) : BufferGeometry
updateFromObject ( object : Object3D ) : BufferGeometry
```
