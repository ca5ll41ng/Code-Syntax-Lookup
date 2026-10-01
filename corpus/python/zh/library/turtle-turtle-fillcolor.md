---
id: "python-zh-function-turtle-fillcolor"
language: "python"
lang: "zh"
category: "function"
name: "fillcolor"
signature: "fillcolor()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.fillcolor"
license: "PSF"
updated: "2026-10-01"
---

# fillcolor

返回或设置填充颜色。

允许以下四种输入格式:

`fillcolor()`
   Return the current fillcolor as color specification string, possibly
   in tuple format (see example).  May be used as input to another
   color/pencolor/fillcolor/bgcolor call.

`fillcolor(colorstring)`
   Set fillcolor to *colorstring*, which is a Tk color specification string,
   such as `"red"`, `"yellow"`, or `"#33cc8c"`.

`fillcolor((r, g, b))`
   Set fillcolor to the RGB color represented by the tuple of *r*, *g*, and
   *b*.  Each of *r*, *g*, and *b* must be in the range 0..colormode, where
   colormode is either 1.0 or 255 (see `colormode`).

`fillcolor(r, g, b)`
   Set fillcolor to the RGB color represented by *r*, *g*, and *b*.  Each of
   *r*, *g*, and *b* must be in the range 0..colormode.

If turtleshape is a polygon, the interior of that polygon is drawn
with the newly set fillcolor.

```python
:skipif: _tkinter is None

>>> turtle.fillcolor("violet")
>>> turtle.fillcolor()
'violet'
>>> turtle.pencolor()
(50.0, 193.0, 143.0)
>>> turtle.fillcolor((50, 193, 143))  # Integers, not floats
>>> turtle.fillcolor()
(50.0, 193.0, 143.0)
>>> turtle.fillcolor('#ffffff')
>>> turtle.fillcolor()
(255.0, 255.0, 255.0)
```
