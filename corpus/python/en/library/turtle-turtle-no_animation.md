---
id: "python-en-function-turtle-no_animation"
language: "python"
lang: "en"
category: "function"
name: "no_animation"
signature: "no_animation()"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.no_animation"
license: "PSF"
updated: "2026-10-01"
---

# no_animation

Temporarily disable turtle animation. The code written inside the
`no_animation` block will not be animated;
once the code block is exited, the drawing will appear.

```python
:skipif: _tkinter is None

>>> with screen.no_animation():
...     for dist in range(2, 400, 2):
...         fd(dist)
...         rt(90)
```

> *Added in 3.14*
