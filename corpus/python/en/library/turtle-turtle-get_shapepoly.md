---
id: "python-en-function-turtle-get_shapepoly"
language: "python"
lang: "en"
category: "function"
name: "get_shapepoly"
signature: "get_shapepoly()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.get_shapepoly"
license: "PSF"
updated: "2026-10-01"
---

# get_shapepoly

Return the current shape polygon as tuple of coordinate pairs. This
can be used to define a new shape or components of a compound shape.

```python
:skipif: _tkinter is None

>>> turtle.shape("square")
>>> turtle.shapetransform(4, -1, 0, 2)
>>> turtle.get_shapepoly()
((50, -20), (30, 20), (-50, 20), (-30, -20))
```
