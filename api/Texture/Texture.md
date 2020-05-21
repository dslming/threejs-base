### Texture

#### 1、属性
```js
.id : Integer
.uuid : String
.name : String
.image : Image
.isTexture : Boolean
.mipmaps : array
.mapping : number
.wrapS : number
.wrapT : number
.magFilter : number
.minFilter : number
.anisotropy : number
.format : number
.type : number
.offset : Vector2
.repeat : Vector2
.rotation : number
.center : Vector2
.matrixAutoUpdate : boolean
.matrix : Matrix3
.generateMipmaps : boolean
.premultiplyAlpha : boolean
.flipY : boolean
.unpackAlignment : number
.encoding : number
.version : Integer
.onUpdate : Function
.needsUpdate : Boolean
```

##### 2、方法
```js
updateMatrix () : null
clone () : Texture
toJSON ( meta : Object ) : Object
dispose () : null
transformUv ( uv : Vector2 ) : Vector2
```
