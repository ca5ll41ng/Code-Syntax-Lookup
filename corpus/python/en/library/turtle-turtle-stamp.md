---
id: "python-en-function-turtle-stamp"
language: "python"
lang: "en"
category: "function"
name: "stamp"
signature: "stamp()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.stamp"
license: "PSF"
updated: "2026-10-01"
---

# stamp

Stamp a copy of the turtle shape onto the canvas at the current turtle
position.  Return a stamp_id for that stamp, which can be used to delete
it by calling `clearstamp(stamp_id)`.

```python
:skipif: _tkinter is None

>>> turtle.color("blue")
>>> stamp_id = turtle.stamp()
>>> turtle.fd(50)
```
