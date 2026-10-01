---
id: "python-en-function-turtle-shape"
language: "python"
lang: "en"
category: "function"
name: "shape"
signature: "shape(name=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.shape"
license: "PSF"
updated: "2026-10-01"
---

# shape

:param name: a string which is a valid shapename

Set turtle shape to shape with given *name* or, if name is not given, return
name of current shape.  Shape with *name* must exist in the TurtleScreen's
shape dictionary.  Initially there are the following polygon shapes: "arrow",
"turtle", "circle", "square", "triangle", "classic".  To learn about how to
deal with shapes see Screen method `register_shape`.

```python
:skipif: _tkinter is None

>>> turtle.shape()
'classic'
>>> turtle.shape("turtle")
>>> turtle.shape()
'turtle'
```
