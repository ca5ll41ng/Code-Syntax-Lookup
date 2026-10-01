---
id: "python-zh-function-turtle-isvisible"
language: "python"
lang: "zh"
category: "function"
name: "isvisible"
signature: "isvisible()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.isvisible"
license: "PSF"
updated: "2026-10-01"
---

# isvisible

如果海龟显示返回 ``True``，如果海龟隐藏返回 ``False``。

```python
:skipif: _tkinter is None

>>> turtle.hideturtle()
>>> turtle.isvisible()
False
>>> turtle.showturtle()
>>> turtle.isvisible()
True
```
