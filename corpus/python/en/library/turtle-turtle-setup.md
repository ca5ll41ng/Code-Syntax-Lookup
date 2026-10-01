---
id: "python-en-function-turtle-setup"
language: "python"
lang: "en"
category: "function"
name: "setup"
signature: "setup(width=_CFG[\"width\"], height=_CFG[\"height\"], startx=_CFG[\"leftright\"], starty=_CFG[\"topbottom\"])"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.setup"
license: "PSF"
updated: "2026-10-01"
---

# setup

Set the size and position of the main window.  Default values of arguments
are stored in the configuration dictionary and can be changed via a
`turtle.cfg` file.

:param width: if an integer, a size in pixels, if a float, a fraction of the
              screen; default is 50% of screen
:param height: if an integer, the height in pixels, if a float, a fraction of
               the screen; default is 75% of screen
:param startx: if positive, starting position in pixels from the left
               edge of the screen, if negative from the right edge, if `None`,
               center window horizontally
:param starty: if positive, starting position in pixels from the top
               edge of the screen, if negative from the bottom edge, if `None`,
               center window vertically

```python
:skipif: _tkinter is None

>>> screen.setup (width=200, height=200, startx=0, starty=0)
>>>              # sets window to 200x200 pixels, in upper left of screen
>>> screen.setup(width=.75, height=0.5, startx=None, starty=None)
>>>              # sets window to 75% of screen by 50% of screen and centers
```
