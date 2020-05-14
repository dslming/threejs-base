#### THREE.Scene 常用的属性

 属性|	描述
 -|-
 add(object)	| 用于向场景中添加对象。使用该方法还可以创建对象组。
 getObjectByName(name,recursive)	| 在创建对象时可以指定唯一的标识 name，使用该方法可以查找特定名字的对象。<br>当参数 recursive 设置为 false 时，在调用者子元素上查找;<br>当参数 recursive 设置为 true 时，在调用者的所有后代对象上查找
 remove(object)	| object 为场景中对象的引用，使用该方法可以将对象从场景中移除.<br>
traverse(function)	| 该方法也可以遍历调用者和调用者的所有后代，function 参数是一个函数，被调用者和每一个后代对象调用 function 方法。

#### THREE.Scene 常用的方法:
 方法|	描述
 -|-
children	 | 用于返回一个场景中所有对象的列表，包括摄像机和光源。
 fog|	 使用该属性可以为场景添加雾化效果，可以产生隐藏远处物体的浓雾效果。
 overrideMaterial	 | 使用该属性可以强制场景中的所有物体使用相同的材质。

#### 代码实战
移除应该做类型判断
```JS
if (lastObject instanceof THREE.Mesh) {
    scene.remove(lastObject);
}
```

通过 traverse() 方法来更新所有方块的旋转状态
```JS
scene.traverse(function (e) {
  if (e instanceof THREE.Mesh && e != plane) {
    e.rotation.x += controls.rotationSpeed;
    e.rotation.y += controls.rotationSpeed;
    e.rotation.z += controls.rotationSpeed;
  }
})
```

添加雾化
```JS
scene.fog = new THREE.FogExp2( 0xffffff, 0.015 );
```