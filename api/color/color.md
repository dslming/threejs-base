https://www.hangge.com/blog/cache/detail_1808.html

###  THREE.Color
#### 1，基本介绍
- 在 Three.js 中，使用 THREE.Color 对象来表示颜色。
- 在构造 Color 对象时，可以使用十六进制字符串（"#c0c0c0"）或者十六进制值（0xc0c0c0）来指定颜色，还可以使用 RGB 颜色值（0.3,0.5,0.6）。

```js
//推荐使用十六进制值
new THREE.Color(0x00000, 1.0)
```

#### 2，方法
 方法|	描述
-|-
 set(value)	 |将当前颜色设置为指定的十六进制值。这个值可以是字符串、数值或是已有的 THREE.Color 实例。
 setHex(value)	 |将当前颜色设置为指定的十六进制数字值。
 setRGB(r,g,b)	 |根据提供的 RGB 值设置颜色。参数范围从 0 到 1。
 setHSL(h,s,l)	 |根据提供的 HSL 值设置颜色。参数范围从 0 到 1。可以查看 http://en.wikibooks.org/wiki/Color_Models:_RGB,_HSV,_HSL 了解 HSL 如何用于设置颜色。
 setStyle(style)	| 根据 css 设置颜色的方式来设置颜色。例如：可以使用 "rgb(25, 0, 0)"、"#ff0000"、"#ff" 或 "red"。
 copy(color)	 |从提供的颜色对象复制颜色值到当前对象。
 copyGammaToLinear(color)	 |通常在内部使用.用 THREE.Color 提供的实例设置对象的颜色。颜色是由伽马色彩空间转换到线性色彩空间得来的。伽马色彩空间也使用 RGB 颜色，但是会使用指数系数而不是线性系数。
 copyLinearToGamma(color)	| 通常在内部使用。用 THREE.Color 提供的实例设置对象的颜色。颜色是由线性色彩空间转换到伽马色彩空间得来的。
 convertGammaToLinear()	| 将当前颜色从伽马色彩空间转换到线性色彩空间。
 convertLinearToGamma()	| 将当前颜色从线性色彩空间转换到伽马色彩空间。
 getHex()	| 以十六进制值形式从颜色对象中获取颜色值：435241。
 getHexString()	| 以十六进制字符串形式从颜色对象中获取颜色值："0c0c0c"。
 getStyle() |	以 css 值的形式从颜色对象中获取颜色值："rgb(112, 0, 0)"。
 getHSL(optionalTarget)	| 以 HSL 值的形式从颜色对象中获取颜色值。如果提供了 optionTarget 对象， Three.js 将把 h、s 和 l 属性设置到该对象。
 offsetHSL(h, s, l)	 |将提供的 h、s 和 l 值添加到当前颜色的 h、s 和 l 值上。
 add(color)	 |将 r、g 和 b 值添加到当前颜色。
 addColors(color1, color2)	| 通常在内部使用。将 color1 和 color2 相加，再将得到的值设置到当前颜色。
 addScalar(s)	 |通常在内部使用。在当前颜色的 RGB 分量上添加值。谨记参数范围从 0 到 1。
 multlply(color)	| 通常在内部使用。将当前颜色的 RGB 值与 THREE.color 对象的 RGB 值相乘。
 multiplyScalar(s)	| 通常在内部使用。将当前颜色的 RGB 值与提供的 RGB 值相乘。谨记参数范围从 0 到 1。
 lerp(color,alpha)	| 通常在内部使用。找出介于对象的颜色和提供的颜色之间的颜色，alpha 属性定义了当前颜色与提供的颜色的差距。
 equals(color)	 |如果 THREE.Color 对象实例提供的颜色的 RGB 值与当前颜色相等，则返回 true。
 fromArray(array)	| 与 setRGB 方法具有相同的功能，只是 RGB 值可以通过数字数组的方式作为参数传入。
 toArray	| 返回三个元素的数组：[r,g,b]。
 clone()	| 复制当前颜色。


