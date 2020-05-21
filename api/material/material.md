### Material
#### 1、属性
```js
.alphaTest : Float
.blendDst : Integer
.blendDstAlpha : Integer
.blendEquation : Integer
.blendEquationAlpha : Integer
.blending : Blending
.blendSrc : Integer
.blendSrcAlpha : Integer
.clipIntersection : Boolean
.clippingPlanes : Array
.clipShadows : Boolean
.colorWrite : Boolean
.defines : Object
.depthFunc : Integer
.depthTest : Boolean
.depthWrite : Boolean
.stencilWrite : Boolean
.stencilWriteMask : Integer
.stencilFunc : Integer
.stencilRef : Integer
.stencilFuncMask : Integer
.stencilFail : Integer
.stencilZFail : Integer
.stencilZPass : Integer
.flatShading : Boolean
.fog : Boolean
.id : Integer
.isMaterial : Boolean
.name : String
.needsUpdate : Boolean
.opacity : Float
.polygonOffset : Boolean
.polygonOffsetFactor : Integer
.polygonOffsetUnits : Integer
.precision : String
.premultipliedAlpha : Boolean
.dithering : Boolean
.shadowSide : Integer
.side : Integer
.toneMapped : Boolean
.transparent : Boolean
.type : String
.uuid : String
.version : Integer
.vertexColors : Integer
.vertexTangents : Boolean
.visible : Boolean
.userData : object
```

#### 2、方法
```js
clone ( ) : Material
copy ( material : material ) : Material
dispose () : null
onBeforeCompile ( shader : Shader, renderer : WebGLRenderer ) : null
setValues ( values : object ) : null
toJSON ( meta : object ) : Object
```
