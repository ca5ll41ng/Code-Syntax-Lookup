---
id: "python-en-function-importlib-resources-abc-traversable"
language: "python"
lang: "en"
category: "function"
name: "Traversable"
directive: "class"
module: "importlib.resources.abc"
source_url: "https://docs.python.org/3/library/importlib.resources.abc.html#importlib.resources.abc.Traversable"
license: "PSF"
updated: "2026-10-01"
---

# Traversable

An object with a subset of `pathlib.Path` methods suitable for
traversing directories and opening files.

For a representation of the object on the file-system, use
`importlib.resources.as_file`.

attribute:: name

method:: iterdir()

method:: is_dir()

method:: is_file()

method:: joinpath(*pathsegments)

method:: __truediv__(child)

method:: open(mode='r', *args, **kwargs)

method:: read_bytes()

method:: read_text(encoding=None)
