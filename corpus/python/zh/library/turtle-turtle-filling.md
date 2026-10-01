---
id: "python-zh-function-turtle-filling"
language: "python"
lang: "zh"
category: "function"
name: "filling"
signature: "filling()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.filling"
license: "PSF"
updated: "2026-10-01"
---

# filling

返回填充状态 (填充为 ``True``，否则为 ``False``)。

```python
:skipif: _tkinter is None

>>> turtle.begin_fill()
>>> if turtle.filling():
...    turtle.pensize(5)
... else:
...    turtle.pensize(3)
```
