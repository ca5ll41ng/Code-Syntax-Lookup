---
id: "python-en-function-turtle-tilt"
language: "python"
lang: "en"
category: "function"
name: "tilt"
signature: "tilt(angle)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.tilt"
license: "PSF"
updated: "2026-10-01"
---

# tilt

:param angle: a number

Rotate the turtleshape by *angle* from its current tilt-angle, but do *not*
change the turtle's heading (direction of movement).

```python
:skipif: _tkinter is None

>>> turtle.reset()
>>> turtle.shape("circle")
>>> turtle.shapesize(5,2)
>>> turtle.tilt(30)
>>> turtle.fd(50)
>>> turtle.tilt(30)
>>> turtle.fd(50)
```
