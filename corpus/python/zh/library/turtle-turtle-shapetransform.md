---
id: "python-zh-function-turtle-shapetransform"
language: "python"
lang: "zh"
category: "function"
name: "shapetransform"
signature: "shapetransform(t11=None, t12=None, t21=None, t22=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.shapetransform"
license: "PSF"
updated: "2026-10-01"
---

# shapetransform

:param t11: a number (optional)
:param t12: a number (optional)
:param t21: a number (optional)
:param t12: a number (optional)

设置或返回海龟形状的当前变形矩阵。

If none of the matrix elements are given, return the transformation
matrix as a tuple of 4 elements.
Otherwise set the given elements and transform the turtleshape
according to the matrix consisting of first row t11, t12 and
second row t21, t22. The determinant t11 * t22 - t12 * t21 must not be
zero, otherwise an error is raised.
Modify stretchfactor, shearfactor and tiltangle according to the
given matrix.

```python
:skipif: _tkinter is None

>>> turtle = Turtle()
>>> turtle.shape("square")
>>> turtle.shapesize(4,2)
>>> turtle.shearfactor(-0.5)
>>> turtle.shapetransform()
(4.0, -1.0, -0.0, 2.0)
```
