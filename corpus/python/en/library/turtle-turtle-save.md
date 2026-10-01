---
id: "python-en-function-turtle-save"
language: "python"
lang: "en"
category: "function"
name: "save"
signature: "save(filename, overwrite=False)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/3/library/turtle.html#turtle.save"
license: "PSF"
updated: "2026-10-01"
---

# save

Save the current turtle drawing (and turtles) as a PostScript file.

:param filename: the path of the saved PostScript file
:param overwrite: if `False` and there already exists a file with the given
                  filename, then the function will raise a
                  `FileExistsError`. If it is `True`, the file will be
                  overwritten.

```python
:skipif: _tkinter is None

>>> screen.save("my_drawing.ps")
>>> screen.save("my_drawing.ps", overwrite=True)
```

> *Added in 3.14*
