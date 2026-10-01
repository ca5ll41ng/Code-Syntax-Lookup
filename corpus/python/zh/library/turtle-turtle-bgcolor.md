---
id: "python-zh-function-turtle-bgcolor"
language: "python"
lang: "zh"
category: "function"
name: "bgcolor"
signature: "bgcolor()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.bgcolor"
license: "PSF"
updated: "2026-10-01"
---

# bgcolor

返回或设置 TurtleScreen 的背景颜色。

允许以下四种输入格式:

`bgcolor()`
   Return the current background color as color specification string or
   as a tuple (see example).  May be used as input to another
   color/pencolor/fillcolor/bgcolor call.

`bgcolor(colorstring)`
   Set the background color to *colorstring*, which is a Tk color
   specification string, such as `"red"`, `"yellow"`, or `"#33cc8c"`.

`bgcolor((r, g, b))`
   Set the background color to the RGB color represented by the tuple of
   *r*, *g*, and *b*.
   Each of *r*, *g*, and *b* must be in the range 0..colormode, where
   colormode is either 1.0 or 255 (see `colormode`).

`bgcolor(r, g, b)`
   Set the background color to the RGB color represented by *r*, *g*, and *b*.  Each of
   *r*, *g*, and *b* must be in the range 0..colormode.

```python
:skipif: _tkinter is None

>>> screen.bgcolor("orange")
>>> screen.bgcolor()
'orange'
>>> screen.bgcolor("#800080")
>>> screen.bgcolor()
(128.0, 0.0, 128.0)
```
