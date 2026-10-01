---
id: "python-en-function-importlib-resources-read_text"
language: "python"
lang: "en"
category: "function"
name: "read_text"
signature: "read_text(anchor, *path_names, encoding='utf-8', errors='strict')"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.read_text"
license: "PSF"
updated: "2026-10-01"
---

# read_text

Read and return the contents of the named resource as `str`.
By default, the contents are read as strict UTF-8.

See `the introduction` for
details on *anchor* and *path_names*.
*encoding* and *errors* have the same meaning as in built-in `open`.

For backward compatibility reasons, the *encoding* argument must be given
explicitly if there are multiple *path_names*.
This limitation is scheduled to be removed in Python 3.15.

This function is roughly equivalent to::

      files(anchor).joinpath(*path_names).read_text(encoding=encoding)

> *Changed in 3.13*: Multiple *path_names* are accepted. *encoding* and *errors* must be given as keyword arguments.
