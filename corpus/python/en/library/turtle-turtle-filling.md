---
id: "python-en-function-turtle-filling"
language: "python"
lang: "en"
category: "function"
name: "filling"
signature: "filling()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.filling"
license: "PSF"
updated: "2026-10-01"
---

# filling

Return fillstate (`True` if filling, `False` else).

```python
:skipif: _tkinter is None

>>> turtle.begin_fill()
>>> if turtle.filling():
...    turtle.pensize(5)
... else:
...    turtle.pensize(3)
```
