---
id: "python-en-function-turtle-dot"
language: "python"
lang: "en"
category: "function"
name: "dot"
signature: "dot()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.dot"
license: "PSF"
updated: "2026-10-01"
---

# dot

:param size: an integer >= 1 (if given)
:param color: a colorstring or a numeric color tuple

Draw a circular dot with diameter *size*, using *color*.  If *size* is
not given, the maximum of `pensize+4` and `2*pensize` is used.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.dot()
>>> turtle.fd(50); turtle.dot(20, "blue"); turtle.fd(50)
>>> turtle.position()
(100.00,-0.00)
>>> turtle.heading()
0.0
```
