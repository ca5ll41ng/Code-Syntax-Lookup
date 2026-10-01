---
id: "python-en-function-py_compile-pycinvalidationmode"
language: "python"
lang: "en"
category: "function"
name: "PycInvalidationMode"
directive: "class"
module: "py_compile"
source_url: "https://docs.python.org/3/library/py_compile.html#py_compile.PycInvalidationMode"
license: "PSF"
updated: "2026-10-01"
---

# PycInvalidationMode

An enumeration of possible methods the interpreter can use to determine
whether a bytecode file is up to date with a source file. The `.pyc` file
indicates the desired invalidation mode in its header. See
`pyc-invalidation` for more information on how Python invalidates
`.pyc` files at runtime.

> *Added in 3.7*

attribute:: TIMESTAMP

attribute:: CHECKED_HASH

attribute:: UNCHECKED_HASH
