---
id: "python-zh-function-turtle-ontimer"
language: "python"
lang: "zh"
category: "function"
name: "ontimer"
signature: "ontimer(fun, t=0)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.ontimer"
license: "PSF"
updated: "2026-10-01"
---

# ontimer

:param fun: a function with no arguments
:param t: a number >= 0

安装一个计时器，在 *t* 毫秒后调用 *fun* 函数。

```python
:skipif: _tkinter is None

>>> running = True
>>> def f():
...     if running:
...         fd(50)
...         lt(60)
...         screen.ontimer(f, 250)
>>> f()   ### makes the turtle march around
>>> running = False
```
