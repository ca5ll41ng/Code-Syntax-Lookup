---
id: "python-en-function-turtle-backward"
language: "python"
lang: "en"
category: "function"
name: "backward"
signature: "backward(distance)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.backward"
license: "PSF"
updated: "2026-10-01"
---

# backward

:param distance: a number

Move the turtle backward by *distance*, opposite to the direction the
turtle is headed. The turtle's heading does not change.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 0)
```

```python
:skipif: _tkinter is None

>>> turtle.position()
(0.00,0.00)
>>> turtle.backward(30)
>>> turtle.position()
(-30.00,0.00)
```
