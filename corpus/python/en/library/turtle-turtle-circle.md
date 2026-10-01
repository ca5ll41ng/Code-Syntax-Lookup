---
id: "python-en-function-turtle-circle"
language: "python"
lang: "en"
category: "function"
name: "circle"
signature: "circle(radius, extent=None, steps=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.circle"
license: "PSF"
updated: "2026-10-01"
---

# circle

:param radius: a number
:param extent: a number or `None`
:param steps: an integer or `None`

Draw a circle with the given *radius*. The center is *radius* units left
of the turtle; *extent*, an angle, determines which part of the circle is
drawn. If *extent* is not given, draw the entire circle. If *extent* is
not a full circle, one endpoint of the arc is the current pen position.
Draw the arc in counterclockwise direction if *radius* is positive,
otherwise in clockwise direction. Finally, the turtle's heading is changed
by *extent*.

As the circle is approximated by an inscribed regular polygon, *steps*
determines the number of steps to use. If not given, it will be calculated
automatically. May be used to draw regular polygons.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.position()
(0.00,0.00)
>>> turtle.heading()
0.0
>>> turtle.circle(50)
>>> turtle.position()
(-0.00,0.00)
>>> turtle.heading()
0.0
>>> turtle.circle(120, 180)  # draw a semicircle
>>> turtle.position()
(0.00,240.00)
>>> turtle.heading()
180.0
```
