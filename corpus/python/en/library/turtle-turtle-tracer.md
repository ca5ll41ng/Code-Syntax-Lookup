---
id: "python-en-function-turtle-tracer"
language: "python"
lang: "en"
category: "function"
name: "tracer"
signature: "tracer(n=None, delay=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.tracer"
license: "PSF"
updated: "2026-10-01"
---

# tracer

:param n: nonnegative integer
:param delay: nonnegative integer

Turn turtle animation on/off and set delay for update drawings.  If
*n* is given, only each n-th regular screen update is really
performed.  (Can be used to accelerate the drawing of complex
graphics.)  When called without arguments, returns the currently
stored value of n. Second argument sets delay value (see
`delay`).

```python
:skipif: _tkinter is None

>>> screen.tracer(8, 25)
>>> dist = 2
>>> for i in range(200):
...     fd(dist)
...     rt(90)
...     dist += 2
```
