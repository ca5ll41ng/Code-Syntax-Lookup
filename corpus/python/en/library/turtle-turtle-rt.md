---
id: "python-en-function-turtle-rt"
language: "python"
lang: "en"
category: "function"
name: "rt"
signature: "rt(angle)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.rt"
license: "PSF"
updated: "2026-10-01"
---

# rt

:param angle: a number

Turn the turtle right by the specified *angle*. The angle is measured in
degrees by default; the unit can be changed with `degrees` or
`radians`. How the heading is measured depends on the turtle mode,
see `mode`.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.setheading(22)
```

```python
:skipif: _tkinter is None

>>> turtle.heading()
22.0
>>> turtle.right(45)
>>> turtle.heading()
337.0
```
