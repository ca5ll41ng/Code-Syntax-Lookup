---
id: "python-zh-function-turtle-end_fill"
language: "python"
lang: "zh"
category: "function"
name: "end_fill"
signature: "end_fill()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.end_fill"
license: "PSF"
updated: "2026-10-01"
---

# end_fill

填充上次调用 :func:`begin_fill` 之后绘制的形状。

Whether or not overlap regions for self-intersecting polygons
or multiple shapes are filled depends on the operating system graphics,
type of overlap, and number of overlaps.  For example, the Turtle star
above may be either all yellow or have some white regions.

```python
:skipif: _tkinter is None

>>> turtle.color("black", "red")
>>> turtle.begin_fill()
>>> turtle.circle(80)
>>> turtle.end_fill()
```
