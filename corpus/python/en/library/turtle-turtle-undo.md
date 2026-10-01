---
id: "python-en-function-turtle-undo"
language: "python"
lang: "en"
category: "function"
name: "undo"
signature: "undo()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.undo"
license: "PSF"
updated: "2026-10-01"
---

# undo

Undo (repeatedly) the last turtle action(s).  Number of available
undo actions is determined by the size of the undobuffer.

```python
:skipif: _tkinter is None

>>> for i in range(4):
...     turtle.fd(50); turtle.lt(80)
...
>>> for i in range(8):
...     turtle.undo()
```
