---
id: "python-en-function-turtle-teleport"
language: "python"
lang: "en"
category: "function"
name: "teleport"
signature: "teleport(x, y=None, *, fill_gap=False)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.teleport"
license: "PSF"
updated: "2026-10-01"
---

# teleport

:param x: a number or `None`
:param y: a number or `None`
:param fill_gap: a boolean

Move turtle to an absolute position. Unlike goto(x, y), a line will not
be drawn. The turtle's orientation does not change. If currently
filling, the polygon(s) teleported from will be filled after leaving,
and filling will begin again after teleporting. This can be disabled
with fill_gap=True, which makes the imaginary line traveled during
teleporting act as a fill barrier like in goto(x, y).

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 0)
```

```python
:skipif: _tkinter is None

>>> tp = turtle.pos()
>>> tp
(0.00,0.00)
>>> turtle.teleport(60)
>>> turtle.pos()
(60.00,0.00)
>>> turtle.teleport(y=10)
>>> turtle.pos()
(60.00,10.00)
>>> turtle.teleport(20, 30)
>>> turtle.pos()
(20.00,30.00)
```

> *Added in 3.12*
