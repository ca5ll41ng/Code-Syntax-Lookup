---
id: "python-en-function-turtle-reset"
language: "python"
lang: "en"
category: "function"
name: "reset"
signature: "reset()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.reset"
license: "PSF"
updated: "2026-10-01"
---

# reset

Delete the turtle's drawings from the screen, re-center the turtle and set
variables to the default values.

```python
:skipif: _tkinter is None

>>> turtle.goto(0,-22)
>>> turtle.left(100)
>>> turtle.position()
(0.00,-22.00)
>>> turtle.heading()
100.0
>>> turtle.reset()
>>> turtle.position()
(0.00,0.00)
>>> turtle.heading()
0.0
```
