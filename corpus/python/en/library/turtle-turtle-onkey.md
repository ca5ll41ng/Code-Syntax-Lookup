---
id: "python-en-function-turtle-onkey"
language: "python"
lang: "en"
category: "function"
name: "onkey"
signature: "onkey(fun, key)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.onkey"
license: "PSF"
updated: "2026-10-01"
---

# onkey

:param fun: a function with no arguments or `None`
:param key: a string: key (e.g. "a") or key-symbol (e.g. "space")

Bind *fun* to key-release event of key.  If *fun* is `None`, event bindings
are removed. Remark: in order to be able to register key-events, TurtleScreen
must have the focus. (See method `listen`.)

```python
:skipif: _tkinter is None

>>> def f():
...     fd(50)
...     lt(60)
...
>>> screen.onkey(f, "Up")
>>> screen.listen()
```
