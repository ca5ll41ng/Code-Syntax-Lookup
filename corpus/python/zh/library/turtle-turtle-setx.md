---
id: "python-zh-function-turtle-setx"
language: "python"
lang: "zh"
category: "function"
name: "setx"
signature: "setx(x)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.setx"
license: "PSF"
updated: "2026-10-01"
---

# setx

:param x: a number

设置海龟的 x 坐标为 *x*。 y 坐标保持不变。

```python
:skipif: _tkinter is None
:hide:

>>> turtle.goto(0, 240)
```

```python
:skipif: _tkinter is None

>>> turtle.position()
(0.00,240.00)
>>> turtle.setx(10)
>>> turtle.position()
(10.00,240.00)
```
