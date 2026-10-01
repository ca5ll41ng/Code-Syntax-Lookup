---
id: "python-en-function-turtle-width"
language: "python"
lang: "en"
category: "function"
name: "width"
signature: "width(width=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.width"
license: "PSF"
updated: "2026-10-01"
---

# width

:param width: a positive number

Set the line thickness to *width* or return it.  If resizemode is set to
"auto" and turtleshape is a polygon, that polygon is drawn with the same line
thickness.  If no argument is given, the current pensize is returned.

```python
:skipif: _tkinter is None

>>> turtle.pensize()
1
>>> turtle.pensize(10)   # from here on lines of width 10 are drawn
```
