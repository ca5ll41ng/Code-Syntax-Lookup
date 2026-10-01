---
id: "python-en-function-py_compile-py_compile"
language: "python"
lang: "en"
category: "function"
name: "py_compile"
title: "Command-Line Interface"
directive: "module"
module: "py_compile"
source_url: "https://docs.python.org/3/library/py_compile.html#module-py_compile"
license: "PSF"
updated: "2026-10-01"
---

# Command-Line Interface

.. _py_compile-cli:

**Command-Line Interface**

This module can be invoked as a script to compile several source
files.  The files named in *filenames* are compiled and the resulting
bytecode is cached in the normal manner.  This program does not search
a directory structure to locate source files; it only compiles files
named explicitly. The exit status is nonzero if one of the files could
not be compiled.

program:: python -m py_compile

option:: <file> ... <fileN>

option:: -q, --quiet

> *Changed in 3.2*: Added support for ``-``.

> *Changed in 3.10*: Added support for :option:`-q`.

> **Seealso**
>
> Module `compileall`
>    Utilities to compile all Python source files in a directory tree.
>
