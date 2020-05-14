原文出自：www.hangge.com  转载请保留原文链接：https://www.hangge.com/blog/cache/detail_1815.html
### 一、Three.js 库提供的所有材质
名称 | 描述 
 -|-
MeshBasicMaterial（网格基础材质） | 基础材质，用于给几何体赋予一种简单的颜色，或者显示几何体的线框。  
MeshDepthMaterial（网格深度材质）  |这个材质使用从摄像机到网格的距离来决定如何给网格上色。  
MeshNormalMaterial（网格法向材质） | 这是一种简单的材质，根据法向向量计算物体表面的颜色。  
MeshFaceMaterial（网格面材质）|  这是一个容器，可以为几何体的各个表面指定不同的材质。  
MeshLambertMaterial（网格 Lambert 材质） | 这是一种考虑光照影响的材质，用于创建暗淡的、不光亮的物体。  
MeshPhongMaterial（网格 Phong 式材质）|  这是一种考虑光照影响的材质，用于创建光亮的物体。  
ShaderMaterial（着色器材质） | 这种材质允许使用自定义的着色器程序，直接控制顶点的放置方式以及像素的着色方式。 
LineBasicMaterial（直线基础材质） | 这种材质可以用于 
THREE.Line（直线）|几何体，用来创建着色的直线。 
LineDashMaterial（虚线材质） | 这种材质与
LineBasicMaterial（直线基础材质）|一样，但允许创建出一种虚线的效果。

### 二、材质的共有属性
#### 1，基础属性
这些属性是最常用的。通过这些属性，可以控制物体的不透明度、是否可见以及如何被引用（通过 ID 或者自定义名称）。

 名称	| 描述
  -|-
 id（标识符）	|  用来识别材质，并在材质创建时赋值。第一个材质的值从 0 开始，每新加一个材质，这个值就增加 1。
 uuid（通用唯一识别码）	|  这是生成的唯一 ID，在内部使用。
 name（名称）	 | 可以通过这个属性赋予材质名称，用于调试的目的。
 opacity（不透明度）	|  定义物体的透明度。与 transparent 属性一起使用。该属性的赋值范围从 0 到 1。
 transparent（是否透明）	| 如果该值设置为 true，Three.js 会使用指定的不透明度渲染物体。 <br> 如果设置为 false，这个物体就不透明（只是着色更明亮些）。<br>如果使用 alpha（透明度）通道的纹理，该属性应该设置为 true。<br>
 overdraw（过度描绘）	|  当你使用 THREE.CanvasRender 时，多边形会被渲染得稍微大一点。当使用这个渲染器渲染的物体有间隙时，可以将这个属性设置为 true。
 visible（是否可见）| 	 定义该材质是否可见。如果设置为 false,那么在场景中就看不到该物体。
 side（侧面）	|   通过这个属性，可以定义几何体的哪一面应用材质。<br>默认值为 THREE.FrontSide（前面），这样可以将材质应用到物体的前面（外侧）。<br>也可以将其设置为 THREE.BackSide（后面），这样可以将材质应用到物体的后面（内侧）。<br>或者也可以将它设置为 THREE.DoubleSide（双侧），可将材质应用到物体的内外两侧。
 needsUpdate（是否更新）	|  对于材质的某些修改，你需要告诉 Three.js 材质已经改变了。如果该属性设置为 true，Three.js会使用新的材质属性更新它的缓存。


#### 2，融合属性
每个物体都有一系列的融合属性。这些属性决定了物体如何与背景融合。

 名称	| 描述
   -|-
 blending（融合）	 | 该属性决定物体上的材质如何与背景融合。一般的融合模式是 THREE.NormalBlending，在这种模式下只显示材质的上层。。
 blendsrc（融合源）	 | 除了使用标准融合模式之外，还可以通过设置 blendsrc、 blenddst 和 blendequation 来创建自定义的融合模式。<br>这个属性定义了该物体（源）如何与背景（目标）相融合。默认值为 THREE.SrcAlphaFactor，即使用 alpha(透明度）通道进行融合。
 blenddst（融合目标）	| 这个属性定义了融合时如何使用背景（目标），默认值为 THREE.OneMinusSrcAlphaFactor，其含义是目标也使用源的 alpha 通道进行融合，只是使用的值是 1（源的 alpha 通道值）。
 blendequation（融合公式）	| 定义了如何使用 blendsrc 和 blenddst 的值。默认值为使它们相加（AddEquation）。通过使用这三个属性，可以创建自定义的融合模式。

#### 3，高级属性
这些高级属性可以控制底层 WebGL 上下文对象渲染物体的方式。不过大多数情况下是不需要使用这些属性的。

 名称	| 描述
   -|-
 depthTest	 |这是一个高级 WebGL 属性。使用这个属性可以打开或关闭 GL_DEPTH_TEST 参数。此参数控制是否使用像素深度来计算新像素的值。通常情况下不必修改这个属性。更多信息可以在 OpenGL 规范中找到。
 depthWrite	 |这是另外一个内部属性。这个属性可以用来决定这个材质是否影响 WebGL 的深度缓存。如果你将一个物体用作二维贴图（例如一个套子），应该将这个属性设置为 false。但是，通常不应该修改这个属性。
 polygonOffset <br> polygonOffsetFactor <br> polygonOffsetUnits	 |通过这些属性，可以控制 WebGL 的 POLYGON_OFFSET_FILL 特性。一般不需要使用它们。有关这些属性具体做什么的解释，可以参考 OpenGL 规范。
 alphatest	 | 可以给这个属性指定一个值（从 0 到 1）。如果某个像素的 alpha 值小于该值，那么该像素不会显示出来。可以使用这个属性移除一些与透明度相关的毛边。


### 三、THREE.MeshBasicMaterial（网格基础材质）
 MeshBasicMaterial 是一种非常简单的材质，这种材质不考虑场景中光照的影响。使用这种材质的网格会被渲染成简单的平面多边形，而且也可以显示几何体的线框。

#### 1，属性介绍
除了那些共有属性之外，MeshBasicMaterial 还有如下特有的属性。

 名称	|描述
  -|-
 color（颜色）	 | 设置材质的颜色。
 wireframe（线框）| 	 设置这个属性可以将材质渲染成线框，非常适用于调试。
 wireframeLinewidth（线框线宽）	|  如果已经打开了 wireframe，这个属性定义线框中线的宽度。
wireframeLinecap（线框线段端点）	 | 这个属性定义了线框模式下顶点间线段的端点如何显示。可选的值包括：
  - round：圆（默认值）
  - butt：平
  - square：方
 在实际使用中，这个属性的修改结果很难看出来。 WebGLRenderer 对象不支持该属性。
 wireframeLinejoin（线框线段连接点）	 这个属性定义了线段的连接点如何显示。可选的值有：
  - round：圆（默认值）
  - bevel：斜角
  - miter：尖角
 如果在一个使用低透明度和 wirefiameLinewidth 值很大的例子里靠近观察，就可以看到这个属性的效果。 WebGLRenderer 对象不支持该属性。
 shading（着色）	 该属性定义如何着色。可选的值有：
THREE.SmoothShading（默认值，这个将产生一个平滑的对象，看不到单个面）
THREE.NoShading
THREE.FlatShading
 vertexColors（顶点颜色）	 可以通过这个属性给每个顶点定义不同的颜色。默认值为：THREE.NoColors。如果将这个值设置为 THREE.VertexColors，渲染器会采用 THREE.Geometry 对象的 colors 属性的值。
 该属性对 CanvasRenderer不起作用，但对 WebGLRender 起作用。比如我们可以使用该属性为线段的不同部分设置不同的颜色。也可以使用这个属性为这种材质类型创建渐变效果。
 fog（雾化）	 该属性指定当前材质是否受全局雾化效果设置的影响。如果将该属性设置为 false，那么我们全局雾化效果设置就不会影响当前对象的渲染。

原文出自：www.hangge.com  转载请保留原文链接：https://www.hangge.com/blog/cache/detail_1816.html