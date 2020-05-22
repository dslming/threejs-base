Three.js矩阵是列优先,行优先需要转置:
```js
lm.line.box.matrix.transpose()
```

#### 平移
```js
lm.line.box.position.set(10,20,30)
// matrix:
[
  1, 0, 0, 0, 
  0, 1, 0, 0, 
  0, 0, 1, 0, 
  10, 20, 30, 1
]
```

#### 旋转
