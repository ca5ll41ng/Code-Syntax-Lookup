---
id: "python-zh-function-turtle-color"
language: "python"
lang: "zh"
category: "function"
name: "color"
signature: "color()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.color"
license: "PSF"
updated: "2026-10-01"
---

# color

返回或设置画笔颜色和填充颜色。

Several input formats are allowed.  They use 0 to 3 arguments as
follows:

`color()`
   Return the current pencolor and the current fillcolor as a pair of color
   specification strings or tuples as returned by `pencolor` and
   `fillcolor`.

`color(colorstring)`, `color((r,g,b))`, `color(r,g,b)`
   Inputs as in `pencolor`, set both, fillcolor and pencolor, to the
   given value.

`color(colorstring1, colorstring2)`, `color((r1,g1,b1), (r2,g2,b2))`
   Equivalent to `pencolor(colorstring1)` and `fillcolor(colorstring2)`
   and analogously if the other input format is used.

If turtleshape is a polygon, outline and interior of that polygon is drawn
with the newly set colors.

```python
:skipif: _tkinter is None

>>> turtle.color("red", "green")
>>> turtle.color()
('red', 'green')
>>> color("#285078", "#a0c8f0")
>>> color()
((40.0, 80.0, 120.0), (160.0, 200.0, 240.0))
```
