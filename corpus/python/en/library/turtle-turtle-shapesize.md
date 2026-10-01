---
id: "python-en-function-turtle-shapesize"
language: "python"
lang: "en"
category: "function"
name: "shapesize"
signature: "shapesize(stretch_wid=None, stretch_len=None, outline=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.shapesize"
license: "PSF"
updated: "2026-10-01"
---

# shapesize

:param stretch_wid: positive number
:param stretch_len: positive number
:param outline: positive number

Return or set the pen's attributes x/y-stretchfactors and/or outline.  Set
resizemode to "user".  If and only if resizemode is set to "user", the turtle
will be displayed stretched according to its stretchfactors: *stretch_wid* is
stretchfactor perpendicular to its orientation, *stretch_len* is
stretchfactor in direction of its orientation, *outline* determines the width
of the shape's outline.

```python
:skipif: _tkinter is None

>>> turtle.shapesize()
(1.0, 1.0, 1)
>>> turtle.resizemode("user")
>>> turtle.shapesize(5, 5, 12)
>>> turtle.shapesize()
(5, 5, 12)
>>> turtle.shapesize(outline=8)
>>> turtle.shapesize()
(5, 5, 8)
```
