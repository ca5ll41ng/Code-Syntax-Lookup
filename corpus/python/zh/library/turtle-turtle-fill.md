---
id: "python-zh-function-turtle-fill"
language: "python"
lang: "zh"
category: "function"
name: "fill"
signature: "fill()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.fill"
license: "PSF"
updated: "2026-10-01"
---

# fill

填充在 ``with turtle.fill():`` 块中绘制的形状。

```python
:skipif: _tkinter is None

>>> turtle.color("black", "red")
>>> with turtle.fill():
...     turtle.circle(80)
```

Using `fill` is equivalent to adding the `begin_fill` before the
fill-block and `end_fill` after the fill-block:

```python
:skipif: _tkinter is None

>>> turtle.color("black", "red")
>>> turtle.begin_fill()
>>> turtle.circle(80)
>>> turtle.end_fill()
```

> *Added in 3.14*
