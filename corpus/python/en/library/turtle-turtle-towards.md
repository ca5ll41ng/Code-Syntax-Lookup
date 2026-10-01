---
id: "python-en-function-turtle-towards"
language: "python"
lang: "en"
category: "function"
name: "towards"
signature: "towards(x, y=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.towards"
license: "PSF"
updated: "2026-10-01"
---

# towards

:param x: a number or a pair/vector of numbers or a turtle instance
:param y: a number if *x* is a number, else `None`

Return the angle of the line from the turtle's position to (x,y). If *y* is
`None`, *x* must be a pair of coordinates, a `Vec2D`, for example
as returned by `pos`, or another turtle. The angle is measured from
the turtle's start orientation, which depends on the turtle mode, see
`mode`.

```python
:skipif: _tkinter is None

>>> turtle.goto(10, 10)
>>> turtle.towards(0,0)
225.0
```
