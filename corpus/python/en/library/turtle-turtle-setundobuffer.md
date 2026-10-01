---
id: "python-en-function-turtle-setundobuffer"
language: "python"
lang: "en"
category: "function"
name: "setundobuffer"
signature: "setundobuffer(size)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.setundobuffer"
license: "PSF"
updated: "2026-10-01"
---

# setundobuffer

:param size: an integer or `None`

Set or disable undobuffer.  If *size* is an integer, an empty undobuffer of
given size is installed.  *size* gives the maximum number of turtle actions
that can be undone by the `undo` method/function.  If *size* is
`None`, the undobuffer is disabled.

```python
:skipif: _tkinter is None

>>> turtle.setundobuffer(42)
```
