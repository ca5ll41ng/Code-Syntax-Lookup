---
id: "python-en-function-importlib-sourcelessfileloader"
language: "python"
lang: "en"
category: "function"
name: "SourcelessFileLoader"
signature: "SourcelessFileLoader(fullname, path)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.SourcelessFileLoader"
license: "PSF"
updated: "2026-10-01"
---

# SourcelessFileLoader

A concrete implementation of `importlib.abc.FileLoader` which can
import bytecode files (i.e. no source code files exist).

Please note that direct use of bytecode files (and thus not source code
files) inhibits your modules from being usable by all Python
implementations or new versions of Python which change the bytecode
format.

> *Added in 3.3*

> *Changed in 3.15*: Removed the ``load_module()`` method.

attribute:: name

attribute:: path

method:: is_package(fullname)

method:: get_code(fullname)

method:: get_source(fullname)
