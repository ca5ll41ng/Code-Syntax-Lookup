---
id: "python-en-function-turtle-degrees"
language: "python"
lang: "en"
category: "function"
name: "degrees"
signature: "degrees(fullcircle=360.0)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.degrees"
license: "PSF"
updated: "2026-10-01"
---

# degrees

:param fullcircle: a number

Set the angle measurement units to degrees. The number of degrees in a full
circle is set to *fullcircle*, which defaults to 360.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.left(90)
>>> turtle.heading()
90.0

>>> # Change angle measurement unit to grad (also known as gon,
>>> # grade, or gradian and equals 1/100-th of the right angle.)
>>> turtle.degrees(400.0)
>>> turtle.heading()
100.0
>>> turtle.degrees(360)
>>> turtle.heading()
90.0
```
