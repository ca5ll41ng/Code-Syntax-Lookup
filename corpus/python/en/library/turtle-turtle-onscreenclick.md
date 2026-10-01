---
id: "python-en-function-turtle-onscreenclick"
language: "python"
lang: "en"
category: "function"
name: "onscreenclick"
signature: "onscreenclick(fun, btn=1, add=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.onscreenclick"
license: "PSF"
updated: "2026-10-01"
---

# onscreenclick

:param fun: a function with two arguments which will be called with the
            coordinates of the clicked point on the canvas
:param btn: number of the mouse-button, defaults to 1 (left mouse button)
:param add: `True` or `False` -- if `True`, a new binding will be
            added, otherwise it will replace a former binding

Bind *fun* to mouse-click events on this screen.  If *fun* is `None`,
existing bindings are removed.

Example for a TurtleScreen instance named `screen` and a Turtle instance
named `turtle`:

```python
:skipif: _tkinter is None

>>> screen.onclick(turtle.goto) # Subsequently clicking into the TurtleScreen will
>>>                             # make the turtle move to the clicked point.
>>> screen.onclick(None)        # remove event binding again
```

> **Note**
>
> This TurtleScreen method is available as a global function only under the
> name `onscreenclick`.  The global function `onclick` is another one
> derived from the Turtle method `onclick`.
>
