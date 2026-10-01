---
id: "python-en-function-turtle-resizemode"
language: "python"
lang: "en"
category: "function"
name: "resizemode"
signature: "resizemode(rmode=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.resizemode"
license: "PSF"
updated: "2026-10-01"
---

# resizemode

:param rmode: one of the strings "auto", "user", "noresize"

Set resizemode to one of the values: "auto", "user", "noresize".  If *rmode*
is not given, return current resizemode.  Different resizemodes have the
following effects:

- "auto": adapts the appearance of the turtle corresponding to the value of pensize.
- "user": adapts the appearance of the turtle according to the values of
  stretchfactor and outlinewidth (outline), which are set by
  `shapesize`.
- "noresize": no adaption of the turtle's appearance takes place.

`resizemode("user")` is called by `shapesize` when used with arguments.

```python
:skipif: _tkinter is None

>>> turtle.resizemode()
'noresize'
>>> turtle.resizemode("auto")
>>> turtle.resizemode()
'auto'
```
