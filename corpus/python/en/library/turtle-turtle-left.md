---
id: "python-en-function-turtle-left"
language: "python"
lang: "en"
category: "function"
name: "left"
signature: "left(angle)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.left"
license: "PSF"
updated: "2026-10-01"
---

# left

:param angle: a number

Turn the turtle left by the specified *angle*. The angle is measured in
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
>>> turtle.left(45)
>>> turtle.heading()
67.0
```
