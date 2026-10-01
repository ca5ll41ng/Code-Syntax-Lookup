---
id: "python-en-function-turtle-fd"
language: "python"
lang: "en"
category: "function"
name: "fd"
signature: "fd(distance)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.fd"
license: "PSF"
updated: "2026-10-01"
---

# fd

:param distance: a number

Move the turtle forward by the specified *distance*, in the direction the
turtle is headed.

```python
:skipif: _tkinter is None

>>> turtle.position()
(0.00,0.00)
>>> turtle.forward(25)
>>> turtle.position()
(25.00,0.00)
>>> turtle.forward(-75)
>>> turtle.position()
(-50.00,0.00)
```
