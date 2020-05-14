### BufferAttribute

#### 1、属性概览
```js
.array : TypedArray
.count : Integer
.isBufferAttribute : Boolean
.itemSize : Integer
.name : String
.needsUpdate : Boolean
.normalized : Boolean
.onUploadCallback : Function
.updateRange : Object
.usage : Usage
.version : Integer
```

#### 2、方法概览
```js
clone () : BufferAttribute
copyArray ( array ) : BufferAttribute
copyAt ( index1 : Integer, bufferAttribute : BufferAttribute, index2 : Integer ) : null
copyColorsArray ( colors : Array ) : BufferAttribute
copyVector2sArray ( vectors : Array ) : BufferAttribute
copyVector3sArray ( vectors : Array ) : BufferAttribute
copyVector4sArray ( vectors : Array ) : BufferAttribute
getX ( index : Integer ) : Number
getY ( index : Integer ) : Number
getZ ( index : Integer ) : Number
getW ( index : Integer ) : Number
onUpload ( callback : Function ) : null
set ( value : Array, offset : Integer ) : BufferAttribute
setUsage ( value : Usage ) : BufferAttribute
setX ( index : Integer, x : Float ) : BufferAttribute
setY ( index : Integer, y : Float ) : BufferAttribute
setZ ( index : Integer, z : Float ) : BufferAttribute
setW ( index : Integer, w : Float ) : BufferAttribute
setXY ( index : Integer, x : Float, y : Float ) : BufferAttribute
setXYZ ( index : Integer, x : Float, y : Float, z : Float ) : BufferAttribute
setXYZW ( index : Integer, x : Float, y : Float, z : Float, w : Float ) : BufferAttribute
```
