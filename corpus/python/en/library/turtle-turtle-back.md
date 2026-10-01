---
id: "python-en-function-turtle-back"
language: "python"
lang: "en"
category: "function"
name: "back"
signature: "back(distance)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.back"
license: "PSF"
updated: "2026-10-01"
---

# back

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
