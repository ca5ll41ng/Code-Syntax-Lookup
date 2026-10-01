---
id: "python-en-function-turtle-colormode"
language: "python"
lang: "en"
category: "function"
name: "colormode"
signature: "colormode(cmode=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.colormode"
license: "PSF"
updated: "2026-10-01"
---

# colormode

:param cmode: one of the values 1.0 or 255

Return the colormode or set it to 1.0 or 255.  Subsequently *r*, *g*, *b*
values of color triples have to be in the range 0..*cmode*.

```python
:skipif: _tkinter is None

>>> screen.colormode(1)
>>> turtle.pencolor(240, 160, 80)
Traceback (most recent call last):
     ...
TurtleGraphicsError: bad color sequence: (240, 160, 80)
>>> screen.colormode()
1.0
>>> screen.colormode(255)
>>> screen.colormode()
255
>>> turtle.pencolor(240,160,80)
```
