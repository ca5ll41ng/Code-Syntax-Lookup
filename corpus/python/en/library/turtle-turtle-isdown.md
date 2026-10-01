---
id: "python-en-function-turtle-isdown"
language: "python"
lang: "en"
category: "function"
name: "isdown"
signature: "isdown()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.isdown"
license: "PSF"
updated: "2026-10-01"
---

# isdown

Return `True` if pen is down, `False` if it's up.

```python
:skipif: _tkinter is None

>>> turtle.penup()
>>> turtle.isdown()
False
>>> turtle.pendown()
>>> turtle.isdown()
True
```
