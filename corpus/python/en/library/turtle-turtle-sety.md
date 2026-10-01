---
id: "python-en-function-turtle-sety"
language: "python"
lang: "en"
category: "function"
name: "sety"
signature: "sety(y)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.sety"
license: "PSF"
updated: "2026-10-01"
---

# sety

:param y: a number

Set the turtle's y coordinate to *y*. The x coordinate is unchanged.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 40)
```

```python
:skipif: _tkinter is None

>>> turtle.position()
(0.00,40.00)
>>> turtle.sety(-10)
>>> turtle.position()
(0.00,-10.00)
```
