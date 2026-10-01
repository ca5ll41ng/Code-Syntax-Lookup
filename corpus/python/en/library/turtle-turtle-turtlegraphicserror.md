---
id: "python-en-function-turtle-turtlegraphicserror"
language: "python"
lang: "en"
category: "function"
name: "TurtleGraphicsError"
directive: "exception"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.TurtleGraphicsError"
license: "PSF"
updated: "2026-10-01"
---

# TurtleGraphicsError

Raised for invalid arguments or operations.
For example, a malformed color string:

```python
:skipif: _tkinter is None

>>> turtle.color("blau")
Traceback (most recent call last):
    ...
turtle.TurtleGraphicsError: bad color string: blau
```
