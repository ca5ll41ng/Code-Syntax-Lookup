---
id: "python-en-function-turtle-end_fill"
language: "python"
lang: "en"
category: "function"
name: "end_fill"
signature: "end_fill()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.end_fill"
license: "PSF"
updated: "2026-10-01"
---

# end_fill

Fill the shape drawn after the last call to `begin_fill`.

Whether or not overlap regions for self-intersecting polygons
or multiple shapes are filled depends on the operating system graphics,
type of overlap, and number of overlaps.  For example, the Turtle star
above may be either all yellow or have some white regions.

```python
:skipif: _tkinter is None

>>> turtle.color("black", "red")
>>> turtle.begin_fill()
>>> turtle.circle(80)
>>> turtle.end_fill()
```
