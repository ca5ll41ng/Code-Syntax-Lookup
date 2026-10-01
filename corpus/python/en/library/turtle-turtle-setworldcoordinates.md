---
id: "python-en-function-turtle-setworldcoordinates"
language: "python"
lang: "en"
category: "function"
name: "setworldcoordinates"
signature: "setworldcoordinates(llx, lly, urx, ury)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.setworldcoordinates"
license: "PSF"
updated: "2026-10-01"
---

# setworldcoordinates

:param llx: a number, x-coordinate of lower left corner of canvas
:param lly: a number, y-coordinate of lower left corner of canvas
:param urx: a number, x-coordinate of upper right corner of canvas
:param ury: a number, y-coordinate of upper right corner of canvas

Set up user-defined coordinate system and switch to mode "world" if
necessary.  This performs a `screen.reset()`.  If mode "world" is already
active, all drawings are redrawn according to the new coordinates.

**ATTENTION**: in user-defined coordinate systems angles may appear
distorted.

```python
:skipif: _tkinter is None

>>> screen.reset()
>>> screen.setworldcoordinates(-50,-7.5,50,7.5)
>>> for _ in range(72):
...     left(10)
...
>>> for _ in range(8):
...     left(45); fd(2)   # a regular octagon
```

```python
:skipif: _tkinter is None
:hide:

>>> screen.reset()
>>> for t in turtles():
...      t.reset()
```
