---
id: "python-en-function-importlib-fileloader"
language: "python"
lang: "en"
category: "function"
name: "FileLoader"
signature: "FileLoader(fullname, path)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.FileLoader"
license: "PSF"
updated: "2026-10-01"
---

# FileLoader

An abstract base class which inherits from `ResourceLoader` and
`ExecutionLoader`, providing concrete implementations of
`ResourceLoader.get_data` and `ExecutionLoader.get_filename`.

The *fullname* argument is a fully resolved name of the module the loader is
to handle. The *path* argument is the path to the file for the module.

> *Added in 3.3*

> *Changed in 3.15*: Removed the ``load_module()`` method.

attribute:: name

attribute:: path

method:: get_filename(fullname)

method:: get_data(path)
