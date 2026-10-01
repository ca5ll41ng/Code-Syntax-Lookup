---
id: "python-en-function-turtle-home"
language: "python"
lang: "en"
category: "function"
name: "home"
signature: "home()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.home"
license: "PSF"
updated: "2026-10-01"
---

# home

Move the turtle to the origin, coordinates (0,0). The turtle's heading is
set to its start orientation, which depends on the turtle mode, see
`mode`.

```python
:skipif: _tkinter is None
:hide:

>>> turtle.setheading(90)
>>> turtle.goto(0, -10)
```

```python
:skipif: _tkinter is None

>>> turtle.heading()
90.0
>>> turtle.position()
(0.00,-10.00)
>>> turtle.home()
>>> turtle.position()
(0.00,0.00)
>>> turtle.heading()
0.0
```
