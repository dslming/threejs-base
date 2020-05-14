### WebGLRenderer
#### 1、属性
```js
.autoClear : Boolean
.autoClearColor : Boolean
.autoClearDepth : Boolean
.autoClearStencil : Boolean
.debug.checkShaderErrors : Boolean
.capabilities : Object
.clippingPlanes : Array
.domElement : DOMElement
.extensions : Object
.gammaFactor : Float
.gammaInput : Boolean
.gammaOutput : Boolean
.info : Object
.localClippingEnabled : Boolean
.maxMorphTargets : Integer
.maxMorphNormals : Integer
.physicallyCorrectLights : Boolean
.properties : Object
.renderLists : WebGLRenderLists
.shadowMap : WebGLShadowMap
.shadowMap.enabled : Boolean
.shadowMap.autoUpdate : Boolean
.shadowMap.needsUpdate : Boolean
.shadowMap.type : Integer
.sortObjects : Boolean
.state : Object
.toneMapping : Constant
.toneMappingExposure : Number
.toneMappingWhitePoint : Number
```

#### 2、方法
```js
clear ( color : Boolean, depth : Boolean, stencil : Boolean ) : null
clearColor ( ) : null
clearDepth ( ) : null
clearStencil ( ) : null
clearTarget (renderTarget : WebGLRenderTarget, color : boolean, depth : boolean, stencil : boolean) : null
compile ( scene : Scene, camera : Camera ) : null
copyFramebufferToTexture ( position : Vector2, texture : Texture, level : Number ) : null
copyTextureToTexture ( position : Vector2, srcTexture : Texture, dstTexture : Texture, level : Number ) : null
dispose ( ) : null
extensions.get ( extensionName : String ) : Object
forceContextLoss ( ) : null
getClearAlpha () : Float
getClearColor () : Color
getContext () : WebGLRenderingContext
getContextAttributes () : WebGLContextAttributes
getActiveCubeFace () : Integer
getActiveMipmapLevel () : Integer
getRenderTarget () : RenderTarget
getCurrentViewport () : RenderTarget
getDrawingBufferSize () : Object
getPixelRatio () : number
getSize () : Object
initTexture ( texture : Texture ) : null
resetGLState ( ) : null
readRenderTargetPixels ( renderTarget : WebGLRenderTarget, x : Float, y : Float, width : Float, height : Float, buffer : TypedArray, activeCubeFaceIndex : Integer ) : null
render ( scene : Scene, camera : Camera, renderTarget : WebGLRenderTarget, forceClear : Boolean ) : null
renderBufferDirect ( camera : Camera, fog : Fog, geometry : Geometry, material : Material, object : Object3D, group : Object ) : null
renderBufferImmediate ( object : Object3D, program : shaderprogram, shading : Material ) : null
setAnimationLoop ( callback : Function ) : null
setClearAlpha ( alpha : Float ) : null
setClearColor ( color : Color, alpha : Float ) : null
setPixelRatio ( value : number ) : null
setRenderTarget ( renderTarget : WebGLRenderTarget, activeCubeFace : Integer, activeMipmapLevel : Integer ) : null
setScissor ( x : Integer, y : Integer, width : Integer, height : Integer ) : null
setScissorTest ( boolean : Boolean ) : null
setSize ( width : Integer, height : Integer, updateStyle : Boolean ) : null
setViewport ( x : Integer, y : Integer, width : Integer, height : Integer ) : null
```
