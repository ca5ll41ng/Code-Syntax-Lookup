---
id: "python-zh-function-turtle-clearstamp"
language: "python"
lang: "zh"
category: "function"
name: "clearstamp"
signature: "clearstamp(stampid)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.clearstamp"
license: "PSF"
updated: "2026-10-01"
---

# clearstamp

:param stampid: an integer, must be return value of previous
                `stamp` call

删除 *stampid* 指定的印章。

```python
:skipif: _tkinter is None

>>> turtle.position()
(150.00,-0.00)
>>> turtle.color("blue")
>>> astamp = turtle.stamp()
>>> turtle.fd(50)
>>> turtle.position()
(200.00,-0.00)
>>> turtle.clearstamp(astamp)
>>> turtle.position()
(200.00,-0.00)
```
