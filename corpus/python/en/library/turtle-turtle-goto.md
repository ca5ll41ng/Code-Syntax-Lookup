---
id: "python-en-function-turtle-goto"
language: "python"
lang: "en"
category: "function"
name: "goto"
signature: "goto(x, y=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.goto"
license: "PSF"
updated: "2026-10-01"
---

# goto

:param x: a number or a pair/vector of numbers
:param y: a number or `None`

Move the turtle to an absolute position. If *y* is `None`, *x* must be a
pair of coordinates or a `Vec2D`, for example as returned by
`pos`. If the pen is down, a line is drawn. The turtle's heading does
not change.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 0)
```

```python
:skipif: _tkinter is None

>>> tp = turtle.pos()
>>> tp
(0.00,0.00)
>>> turtle.goto(60,30)
>>> turtle.pos()
(60.00,30.00)
>>> turtle.goto((20,80))
>>> turtle.pos()
(20.00,80.00)
>>> turtle.goto(tp)
>>> turtle.pos()
(0.00,0.00)
```
