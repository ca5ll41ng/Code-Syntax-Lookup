---
id: "python-zh-function-doctest-doctestfinder"
language: "python"
lang: "zh"
category: "function"
name: "DocTestFinder"
signature: "DocTestFinder(verbose=False, parser=DocTestParser(), recurse=True, exclude_empty=True)"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.DocTestFinder"
license: "PSF"
updated: "2026-10-01"
---

# DocTestFinder

A processing class used to extract the `DocTest`\ s that are relevant to
a given object, from its docstring and the docstrings of its contained objects.
`DocTest`\ s can be extracted from modules, classes, functions,
methods, staticmethods, classmethods, and properties.

The optional argument *verbose* can be used to display the objects searched by
the finder.  It defaults to `False` (no output).

The optional argument *parser* specifies the `DocTestParser` object (or a
drop-in replacement) that is used to extract doctests from docstrings.

If the optional argument *recurse* is false, then `DocTestFinder.find`
will only examine the given object, and not any contained objects.

If the optional argument *exclude_empty* is false, then
`DocTestFinder.find` will include tests for objects with empty docstrings.

:class:`DocTestFinder` 定义了以下方法：

method:: find(obj[, name][, module][, globs][, extraglobs])
