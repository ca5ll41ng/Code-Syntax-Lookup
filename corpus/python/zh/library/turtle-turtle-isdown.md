---
id: "python-zh-function-turtle-isdown"
language: "python"
lang: "zh"
category: "function"
name: "isdown"
signature: "isdown()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.isdown"
license: "PSF"
updated: "2026-10-01"
---

# isdown

如果画笔落下返回 ``True``，如果画笔抬起返回 ``False``。

```python
:skipif: _tkinter is None

>>> turtle.penup()
>>> turtle.isdown()
False
>>> turtle.pendown()
>>> turtle.isdown()
True
```
