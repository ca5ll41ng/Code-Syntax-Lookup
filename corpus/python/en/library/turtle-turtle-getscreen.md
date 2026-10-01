---
id: "python-en-function-turtle-getscreen"
language: "python"
lang: "en"
category: "function"
name: "getscreen"
signature: "getscreen()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.getscreen"
license: "PSF"
updated: "2026-10-01"
---

# getscreen

Return the `TurtleScreen` object the turtle is drawing on.
TurtleScreen methods can then be called for that object.

```python
:skipif: _tkinter is None

>>> ts = turtle.getscreen()
>>> ts
<turtle._Screen object at 0x...>
>>> ts.bgcolor("pink")
```
