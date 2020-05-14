### Geometry
#### 1、属性概览
```js
.boundingBox : Box3
.boundingSphere : Sphere
.colors : Array
.faces : Array
.faceVertexUvs : Array
.id : Integer
.isGeometry : Boolean
.lineDistances : array
.morphTargets : Array
.morphNormals : Array
.name : String
.skinWeights : Array
.skinIndices : Array
.vertices : Array
.verticesNeedUpdate : Boolean
.elementsNeedUpdate : Boolean
.uvsNeedUpdate : Boolean
.normalsNeedUpdate : Boolean
.colorsNeedUpdate : Boolean
.groupsNeedUpdate : Boolean
.lineDistancesNeedUpdate : Boolean
```

#### 1、方法概览
```js
applyMatrix ( matrix : Matrix4 ) : null
center () : Geometry
clone () : Geometry
computeBoundingBox () : null
computeBoundingSphere () : null
computeFaceNormals () : null
computeFlatVertexNormals () : null
computeMorphNormals () : null
computeVertexNormals ( areaWeighted : Boolean ) : null
copy ( geometry : Geometry ) : Geometry
dispose () : null
fromBufferGeometry ( geometry : BufferGeometry ) : Geometry
lookAt ( vector : Vector3 ) : Geometry
merge ( geometry : Geometry, matrix : Matrix4, materialIndexOffset : Integer ) : null
mergeMesh ( mesh : Mesh ) : null
mergeVertices () : null
normalize () : null
rotateX ( radians : Float ) : Geometry
rotateY ( radians : Float ) : Geometry
rotateZ ( radians : Float ) : Geometry
setFromPoints ( points : Array ) : Geometry
sortFacesByMaterialIndex ( ) : null
scale ( x : Float, y : Float, z : Float ) : Geometry
toJSON ( ) : JSON
translate ( x : Float, y : Float, z : Float ) : Geometry
```
