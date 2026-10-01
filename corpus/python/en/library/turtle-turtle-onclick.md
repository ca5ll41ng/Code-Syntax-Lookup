---
id: "python-en-function-turtle-onclick"
language: "python"
lang: "en"
category: "function"
name: "onclick"
signature: "onclick(fun, btn=1, add=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.onclick"
license: "PSF"
updated: "2026-10-01"
---

# onclick

:param fun: a function with two arguments which will be called with the
            coordinates of the clicked point on the canvas
:param btn: number of the mouse-button, defaults to 1 (left mouse button)
:param add: `True` or `False` -- if `True`, a new binding will be
            added, otherwise it will replace a former binding

Bind *fun* to mouse-click events on this turtle.  If *fun* is `None`,
existing bindings are removed.  Example for the anonymous turtle, i.e. the
procedural way:

```python
:skipif: _tkinter is None

>>> def turn(x, y):
...     left(180)
...
>>> onclick(turn)  # Now clicking into the turtle will turn it.
>>> onclick(None)  # event-binding will be removed
```
