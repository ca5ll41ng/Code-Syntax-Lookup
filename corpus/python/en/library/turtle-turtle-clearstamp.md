---
id: "python-en-function-turtle-clearstamp"
language: "python"
lang: "en"
category: "function"
name: "clearstamp"
signature: "clearstamp(stampid)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.clearstamp"
license: "PSF"
updated: "2026-10-01"
---

# clearstamp

:param stampid: an integer, must be return value of previous
                `stamp` call

Delete stamp with given *stampid*.

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
