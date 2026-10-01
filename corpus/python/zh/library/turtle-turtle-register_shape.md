---
id: "python-zh-function-turtle-register_shape"
language: "python"
lang: "zh"
category: "function"
name: "register_shape"
signature: "register_shape(name, shape=None)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.register_shape"
license: "PSF"
updated: "2026-10-01"
---

# register_shape

调用此函数有四种不同方式：

(1) *name* is the name of an image file (PNG, GIF, PGM, and PPM) and *shape* is `None`: Install the
    corresponding image shape. ::

    >>> screen.register_shape("turtle.gif")

> **Note**
>
> Image shapes *do not* rotate when turning the turtle, so they do not
> display the heading of the turtle!
>

(2) *name* is an arbitrary string and *shape* is the name of an image file (PNG, GIF, PGM, and PPM): Install the
    corresponding image shape. ::

    >>> screen.register_shape("turtle", "turtle.gif")

> **Note**
>
> Image shapes *do not* rotate when turning the turtle, so they do not
> display the heading of the turtle!
>

(3) *name* is an arbitrary string and *shape* is a tuple of pairs of
    coordinates: Install the corresponding polygon shape.

```python
:skipif: _tkinter is None

>>> screen.register_shape("triangle", ((5,-3), (0,5), (-5,-3)))
```

(4) *name* is an arbitrary string and *shape* is a (compound) `Shape`
    object: Install the corresponding compound shape.

Add a turtle shape to TurtleScreen's shapelist.  Only thusly registered
shapes can be used by issuing the command `shape(shapename)`.

> *Changed in 3.14*: Added support for PNG, PGM, and PPM image formats. Both a shape name and an image file name can be specified.
