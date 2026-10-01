---
id: "python-en-function-turtle-setx"
language: "python"
lang: "en"
category: "function"
name: "setx"
signature: "setx(x)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.setx"
license: "PSF"
updated: "2026-10-01"
---

# setx

:param x: a number

Set the turtle's x coordinate to *x*. The y coordinate is unchanged.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 240)
```

```python
:skipif: _tkinter is None

>>> turtle.position()
(0.00,240.00)
>>> turtle.setx(10)
>>> turtle.position()
(10.00,240.00)
```
