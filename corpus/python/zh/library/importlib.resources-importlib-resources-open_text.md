---
id: "python-zh-function-importlib-resources-open_text"
language: "python"
lang: "zh"
category: "function"
name: "open_text"
signature: "open_text(anchor, *path_names, encoding='utf-8', errors='strict')"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.html#importlib.resources.open_text"
license: "PSF"
updated: "2026-10-01"
---

# open_text

Open the named resource for text reading.
By default, the contents are read as strict UTF-8.

See `the introduction` for
details on *anchor* and *path_names*.
*encoding* and *errors* have the same meaning as in built-in `open`.

For backward compatibility reasons, the *encoding* argument must be given
explicitly if there are multiple *path_names*.
This limitation is scheduled to be removed in Python 3.15.

This function returns a `~typing.TextIO` object,
that is, a text stream open for reading.

此函数大致等价于::

      files(anchor).joinpath(*path_names).open('r', encoding=encoding)

> *Changed in 3.13*: Multiple *path_names* are accepted. *encoding* and *errors* must be given as keyword arguments.
