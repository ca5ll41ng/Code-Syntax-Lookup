---
id: "python-en-function-turtle-shearfactor"
language: "python"
lang: "en"
category: "function"
name: "shearfactor"
signature: "shearfactor(shear=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.shearfactor"
license: "PSF"
updated: "2026-10-01"
---

# shearfactor

:param shear: number (optional)

Set or return the current shearfactor. Shear the turtleshape according to
the given shearfactor shear, which is the tangent of the shear angle.
Do *not* change the turtle's heading (direction of movement).
If shear is not given: return the current shearfactor, i. e. the
tangent of the shear angle, by which lines parallel to the
heading of the turtle are sheared.

```python
:skipif: _tkinter is None

>>> turtle.shape("circle")
>>> turtle.shapesize(5,2)
>>> turtle.shearfactor(0.5)
>>> turtle.shearfactor()
0.5
```
