---
id: "python-en-function-turtle-write"
language: "python"
lang: "en"
category: "function"
name: "write"
signature: "write(arg, move=False, align=\"left\", font=(\"Arial\", 8, \"normal\"))"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.write"
license: "PSF"
updated: "2026-10-01"
---

# write

:param arg: object to be written to the TurtleScreen
:param move: True/False
:param align: one of the strings "left", "center" or right"
:param font: a triple (fontname, fontsize, fonttype)

Write text - the string representation of *arg* - at the current turtle
position according to *align* ("left", "center" or "right") and with the given
font.  If *move* is true, the pen is moved to the bottom-right corner of the
text.  By default, *move* is `False`.

```python
:skipif: _tkinter is None

>>> turtle.write("Home = ", True, align="center")
>>> turtle.write((0,0), True)
```
