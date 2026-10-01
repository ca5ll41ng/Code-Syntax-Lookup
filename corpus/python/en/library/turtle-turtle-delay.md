---
id: "python-en-function-turtle-delay"
language: "python"
lang: "en"
category: "function"
name: "delay"
signature: "delay(delay=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.delay"
license: "PSF"
updated: "2026-10-01"
---

# delay

:param delay: positive integer

Set or return the drawing *delay* in milliseconds.  (This is approximately
the time interval between two consecutive canvas updates.)  The longer the
drawing delay, the slower the animation.

Optional argument:

```python
:skipif: _tkinter is None

>>> screen.delay()
10
>>> screen.delay(5)
>>> screen.delay()
5
```
