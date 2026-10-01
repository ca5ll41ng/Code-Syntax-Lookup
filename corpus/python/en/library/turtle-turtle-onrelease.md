---
id: "python-en-function-turtle-onrelease"
language: "python"
lang: "en"
category: "function"
name: "onrelease"
signature: "onrelease(fun, btn=1, add=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.onrelease"
license: "PSF"
updated: "2026-10-01"
---

# onrelease

:param fun: a function with two arguments which will be called with the
            coordinates of the clicked point on the canvas
:param btn: number of the mouse-button, defaults to 1 (left mouse button)
:param add: `True` or `False` -- if `True`, a new binding will be
            added, otherwise it will replace a former binding

Bind *fun* to mouse-button-release events on this turtle.  If *fun* is
`None`, existing bindings are removed.

```python
:skipif: _tkinter is None

>>> class MyTurtle(Turtle):
...     def glow(self,x,y):
...         self.fillcolor("red")
...     def unglow(self,x,y):
...         self.fillcolor("")
...
>>> turtle = MyTurtle()
>>> turtle.onclick(turtle.glow)     # clicking on turtle turns fillcolor red,
>>> turtle.onrelease(turtle.unglow) # releasing turns it to transparent.
```
