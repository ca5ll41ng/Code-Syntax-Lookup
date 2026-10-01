---
id: "python-en-function-turtle-clearstamps"
language: "python"
lang: "en"
category: "function"
name: "clearstamps"
signature: "clearstamps(n=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.clearstamps"
license: "PSF"
updated: "2026-10-01"
---

# clearstamps

:param n: an integer (or `None`)

Delete all or first/last *n* of turtle's stamps.  If *n* is `None`, delete
all stamps, if *n* > 0 delete first *n* stamps, else if *n* < 0 delete
last *n* stamps.

```python
:skipif: _tkinter is None

>>> for i in range(8):
...     unused_stamp_id = turtle.stamp()
...     turtle.fd(30)
>>> turtle.clearstamps(2)
>>> turtle.clearstamps(-2)
>>> turtle.clearstamps()
```
