---
id: "python-en-function-turtle-poly"
language: "python"
lang: "en"
category: "function"
name: "poly"
signature: "poly()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.poly"
license: "PSF"
updated: "2026-10-01"
---

# poly

Record the vertices of a polygon drawn in the `with turtle.poly():` block.
The first and last vertices will be connected.

```python
:skipif: _tkinter is None

>>> with turtle.poly():
...     turtle.forward(100)
...     turtle.right(60)
...     turtle.forward(100)
```

> *Added in 3.14*
