---
id: "python-en-function-turtle-seth"
language: "python"
lang: "en"
category: "function"
name: "seth"
signature: "seth(to_angle)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.seth"
license: "PSF"
updated: "2026-10-01"
---

# seth

:param to_angle: a number

Set the turtle's heading to *to_angle*. Here are some common directions in
degrees:

=================== ====================
 standard mode           logo mode
=================== ====================
   0 - east                0 - north
  90 - north              90 - east
 180 - west              180 - south
 270 - south             270 - west
=================== ====================

```python
:skipif: _tkinter is None

>>> turtle.setheading(90)
>>> turtle.heading()
90.0
```
