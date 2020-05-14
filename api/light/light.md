[参考出处](https://www.hangge.com/blog/cache/detail_1810.html)

### 一、THREE.AmbientLight（环境光）

#### 1，基本介绍
- 在创建 THREE.AmbientLight 时，颜色会应用到全局。
- 该光源并没有特别的来源方向，并且 THREE.AmbientLight 不会产生阴影。

#### 2，使用建议
- 通常，不能将 THREE.AmbientLight 作为场景中唯一的光源，因为它会将场景中的所有物体渲染为相同的颜色，而不管是什么形状。
- 在使用其他光源（如 THREE.SpotLight 或者 THREE.DirectionLight）的同时使用它，目的是弱化阴影或给场景添加一些额外的颜色。

### 二、THREE.PointLight（点光源）
#### 1，基本介绍
- THREE.PointLight 是一种单点发光、照射所有方向的光源（比如夜空中的照明弹就是一个点光源例子）
- THREE.PointLight 不会产生阴影。因为它会朝所有的方向发射光线，在这种情况下计算阴影对 GPU 是个沉重的负担。

#### 2，属性介绍
 属性|	描述
-|-
color|光源的颜色
distance|光源照射的距离。默认值为 0，意味着光的强度不会随着距离的增加而减少。
intensity|光源照射的强度。默认值为 1。
position|光源在场景中的位置。
visible|设为 ture（默认值），光源就会打开。设为 false，光源就会关闭。

### 三、THREE.SpotLight（聚光灯光源）
#### 1，基本介绍
- THREE.SpotLight 是一种具有锥形效果的光源，该光源拥有产生光的方向和角度。我们可以将其与手电筒或者灯笼产生的光进行对比。
- THREE.SpotLight 是最常使用的光源之一，特别是如果我们想要使用阴影的话。


#### 2，属性介绍
 属性|	描述
-|-
angle|角度。即光源发射出的光束的宽度。单位是弧度，默认值：Math.PI/3
castShadow|投影。如果设置为 true，这个光源就会生成阴影。
color|光源颜色。
distance|光源照射的距离。默认值为 0，这意味着光线强度不会随着距离增加而减弱。
exponent|光强衰减指数。使用 THREE.SpotLight 光源，发射的光线的强度随着光源距离的增加而减弱。exponent 属性决定了光线强度递减的速度。使用低值，从光源发出的光线将到达远处的物体，而使用高值，光线仅能到达非常接近 THREE.SpotLight 光源的物体。
intensity|光源照射的强度。默认值：1
onlyShadow|仅阴影。如果此属性设置为 true，则该光源只生成阴影，而不会在场景中添加任何光照。
position|光源在场景中的位置
shadow.bias|用来偏置阴影的位置。当你使用非常薄的对象时，可以使用它来解决一些奇怪的效果。如果你看到奇怪的阴影效果，将该属性设置为很小的值（例如 0.01）通常可以解决问题。此属性的默认值为 0。
shadow.camera.far|投影远点。表示到距离光源的哪一个位置可以生成阴影。默认值：5000
shadow.camera.fov|投影视场。表示用于生成阴影的视场有多大。默认值：50
shadow.camera.near|投影近点。表示距离光源的哪一个位置开始生成阴影。默认值为 50
shadow.map.width 和 shadow.map.height：阴影映射宽度和阴影映射高度。决定了有多少像素用来生成阴影。当阴影具有锯齿状边缘或看起来不光滑时，可以增加这个值。在场景渲染之后无法更改。两者的默认值均为：512
target|目标。使用 THREE.SpotLight 光源时，它的指向很重要。使用 target 属性，你可以将 THREE.SpotLight 光源指向场景中的特定对象或位置。注意，此属性需要一个 THREE.Object3D 对象（如 THREE.Mesh)。
visible|是否可见。如果该属性设置为 true（默认值），该光源就会打开。如果设置 false，光源就会关闭。

### 四、THREE.DirectionLight（平行光）
#### 1，基本介绍
- THREE.DirectionLight 可以看作是距离很远的光，它发出的所有光线都是相互平行的。平行光的一个范例就是太阳光。
- 平行光不像上面的聚光灯（通过 distance 和 exponent 属性来微调）那样离目标越远越暗淡。被平行光照亮的整个区域接受到的光强是一样的。


#### 2，属性介绍
 属性|	描述
-|-
position|光源在场景中的位置。
target|目标。使用 THREE.DirectionLight 光源时，它的指向很重要。使用 target 属性，你可以将 THREE.SpotLight 光源指向场景中的特定对象或位置。注意，此属性需要一个 THREE.Object3D 对象（如 THREE.Mesh)。
intensity|光源照射的强度。默认值：1
castShadow|投影。如果设置为 true，这个光源就会生成阴影
onlyShadow|仅阴影。如果此属性设置为 true，则该光源只生成阴影，而不会在场景中添加任何光照。
shadow.camera.near|投影近点。表示距离光源的哪一个位置开始生成阴影。
shadow.camera.far|投影远点。表示到距离光源的哪一个位置可以生成阴影。
shadow.camera.left|投影左边界。
shadow.camera.right|投影右边界。
shadow.camera.top|投影上边界。
shadow.camera.bottom|投影下边界。
shadow.map.width 和 shadow.map.height|阴影映射宽度和阴影映射高度。决定了有多少像素用来生成阴影。当阴影具有锯齿状边缘或看起来不光滑时，可以增加这个值。在场景渲染之后无法更改。两者的默认值均为：512 <br>
shadowCascade|当我们需要使用 THREE.DirectionLight 在一个很大的区域设置阴影时，这个属性可以帮助创建更好的阴影效果。<br>该属性默认为 false。如果将这个属性设置为 true，Three.js 会使用一个替代方法来生成阴影。它将阴影的生成分裂为由 shadowCascadeCount 指定的值。这将导致靠近摄相机视点会产生更具细节的阴影，而远离摄像机视点阴影的细节更少。<br>要使用这个选项需要尝试设置一下属性：shadowCascadeCount、shadowCascadeBias、shadowCascadeWidth、shadowCascadeHeight、shadowCascadeNearZ 和 shadowCascadeFarZ 属性。

### 五、THREE.HemisphereLight（环境光）
#### 1，基本介绍
- 使用 THREE.HemisphereLight 可以创建更加贴近自然的户外光照效果。
- THREE.HemisphereLight 不会产生阴影。

#### 2，属性介绍
 属性|	描述
-|-
color|从天空发出的光线的颜色
groundColor|从地面发出的光线的颜色
intensity|光源照射的强度。默认值为：1。
position|光源在场景中的位置。默认值为：(0, 100, 0)
visible|设为 ture（默认值），光源就会打开。设为 false，光源就会关闭。

### 六、THREE.LensFlare（镜头光晕）
#### 1，基本介绍
- 当我们直接朝着太阳或者另一个非常明亮的光源拍照时就会出现镜头光晕效果（lens flare）。
- 使用 THREE.LensFlare 可以很方便地在场景中添加一个镜头光晕，这样会让场景看上去更加真实。
THREE.LensFlare 自身不会产生任何光照效果，也不会产生阴影。

#### 2，属性介绍
 属性|	描述
-|-
texture|纹理。纹理就是一个图片，用来决定光晕的形状。
size|尺寸。可以指定光晕多大。这个尺寸的单位是像素。如果将它指定为 -1，那么将使用纹理本身的尺寸。
distance|距离。即从光源（0）到摄像机的距离。使用这个参数将镜头光晕放置在正确的位置。
blending|混合。我们我们可以为光晕提供多种材质。混合模式决定了如何将它们混合在一起。镜头光晕默认的混合方式是 THREE.AdditiveBlending。
color|光晕的颜色。

#### 3，准备工作
如果需要往场景中添加一个镜头光晕，首先我们需要将渲染器 THREE.WebGLRenderer 对象的 alpha 配置属性设置为 true。
```js
var renderer = new THREE.WebGLRenderer({
  alpha: true
});
```