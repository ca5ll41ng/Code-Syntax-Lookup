---
id: "python-en-function-turtle-distance"
language: "python"
lang: "en"
category: "function"
name: "distance"
signature: "distance(x, y=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.distance"
license: "PSF"
updated: "2026-10-01"
---

# distance

:param x: a number or a pair/vector of numbers or a turtle instance
:param y: a number if *x* is a number, else `None`

Return the distance from the turtle to (x,y) in turtle step units. If *y* is
`None`, *x* must be a pair of coordinates, a `Vec2D`, for example
as returned by `pos`, or another turtle.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.distance(30,40)
50.0
>>> turtle.distance((30,40))
50.0
>>> joe = Turtle()
>>> joe.forward(77)
>>> turtle.distance(joe)
77.0
```
