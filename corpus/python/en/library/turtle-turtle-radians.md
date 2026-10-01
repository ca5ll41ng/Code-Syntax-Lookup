---
id: "python-en-function-turtle-radians"
language: "python"
lang: "en"
category: "function"
name: "radians"
signature: "radians()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.radians"
license: "PSF"
updated: "2026-10-01"
---

# radians

Set the angle measurement units to radians.  Equivalent to
`degrees(2 * math.pi)`.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.left(90)
>>> turtle.heading()
90.0
>>> turtle.radians()
>>> turtle.heading()
1.5707963267948966
```

```python
:skipif: _tkinter is None
:hide:

>>> turtle.degrees(360)
```
