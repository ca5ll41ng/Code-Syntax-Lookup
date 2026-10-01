---
id: "python-en-function-turtle-get_poly"
language: "python"
lang: "en"
category: "function"
name: "get_poly"
signature: "get_poly()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.get_poly"
license: "PSF"
updated: "2026-10-01"
---

# get_poly

Return the last recorded polygon.

```python
:skipif: _tkinter is None

>>> turtle.home()
>>> turtle.begin_poly()
>>> turtle.fd(100)
>>> turtle.left(20)
>>> turtle.fd(30)
>>> turtle.left(60)
>>> turtle.fd(50)
>>> turtle.end_poly()
>>> p = turtle.get_poly()
>>> register_shape("myFavouriteShape", p)
```
