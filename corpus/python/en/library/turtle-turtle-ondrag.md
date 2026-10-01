---
id: "python-en-function-turtle-ondrag"
language: "python"
lang: "en"
category: "function"
name: "ondrag"
signature: "ondrag(fun, btn=1, add=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.ondrag"
license: "PSF"
updated: "2026-10-01"
---

# ondrag

:param fun: a function with two arguments which will be called with the
            coordinates of the clicked point on the canvas
:param btn: number of the mouse-button, defaults to 1 (left mouse button)
:param add: `True` or `False` -- if `True`, a new binding will be
            added, otherwise it will replace a former binding

Bind *fun* to mouse-move events on this turtle.  If *fun* is `None`,
existing bindings are removed.

Remark: Every sequence of mouse-move-events on a turtle is preceded by a
mouse-click event on that turtle.

```python
:skipif: _tkinter is None

>>> turtle.ondrag(turtle.goto)
```

Subsequently, clicking and dragging the Turtle will move it across
the screen thereby producing handdrawings (if pen is down).
