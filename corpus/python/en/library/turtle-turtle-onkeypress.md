---
id: "python-en-function-turtle-onkeypress"
language: "python"
lang: "en"
category: "function"
name: "onkeypress"
signature: "onkeypress(fun, key=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.onkeypress"
license: "PSF"
updated: "2026-10-01"
---

# onkeypress

:param fun: a function with no arguments or `None`
:param key: a string: key (e.g. "a") or key-symbol (e.g. "space")

Bind *fun* to key-press event of key if key is given,
or to any key-press-event if no key is given.
Remark: in order to be able to register key-events, TurtleScreen
must have focus. (See method `listen`.)

```python
:skipif: _tkinter is None

>>> def f():
...     fd(50)
...
>>> screen.onkey(f, "Up")
>>> screen.listen()
```
