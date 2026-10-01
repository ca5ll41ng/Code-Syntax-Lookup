---
id: "python-en-function-turtle-screensize"
language: "python"
lang: "en"
category: "function"
name: "screensize"
signature: "screensize(canvwidth=None, canvheight=None, bg=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.screensize"
license: "PSF"
updated: "2026-10-01"
---

# screensize

:param canvwidth: positive integer, new width of canvas in pixels
:param canvheight: positive integer, new height of canvas in pixels
:param bg: colorstring or color-tuple, new background color

If no arguments are given, return current (canvaswidth, canvasheight).  Else
resize the canvas the turtles are drawing on.  Do not alter the drawing
window.  To observe hidden parts of the canvas, use the scrollbars. With this
method, one can make visible those parts of a drawing which were outside the
canvas before.

```python
:skipif: _tkinter is None

>>> screen.screensize()
(400, 300)
>>> screen.screensize(2000,1500)
>>> screen.screensize()
(2000, 1500)
```

e.g. to search for an erroneously escaped turtle ;-)
