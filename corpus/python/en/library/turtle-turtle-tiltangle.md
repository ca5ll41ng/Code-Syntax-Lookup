---
id: "python-en-function-turtle-tiltangle"
language: "python"
lang: "en"
category: "function"
name: "tiltangle"
signature: "tiltangle(angle=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.tiltangle"
license: "PSF"
updated: "2026-10-01"
---

# tiltangle

:param angle: a number (optional)

Set or return the current tilt-angle. If angle is given, rotate the
turtleshape to point in the direction specified by angle,
regardless of its current tilt-angle. Do *not* change the turtle's
heading (direction of movement).
If angle is not given: return the current tilt-angle, i. e. the angle
between the orientation of the turtleshape and the heading of the
turtle (its direction of movement).

```python
:skipif: _tkinter is None

>>> turtle.reset()
>>> turtle.shape("circle")
>>> turtle.shapesize(5,2)
>>> turtle.tilt(45)
>>> turtle.tiltangle()
45.0
```
