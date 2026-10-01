---
id: "python-zh-function-turtle-save"
language: "python"
lang: "zh"
category: "function"
name: "save"
signature: "save(filename, overwrite=False)"
directive: "function"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.save"
license: "PSF"
updated: "2026-10-01"
---

# save

将当前海龟绘图（和海龟）另存为PostScript文件。

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
