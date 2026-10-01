---
id: "python-zh-function-doctest-testsource"
language: "python"
lang: "zh"
category: "function"
name: "testsource"
signature: "testsource(module, name)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.testsource"
license: "PSF"
updated: "2026-10-01"
---

# testsource

将一个对象的 doctest 转换为一个脚本。

Argument *module* is a module object, or dotted name of a module, containing the
object whose doctests are of interest.  Argument *name* is the name (within the
module) of the object with the doctests of interest.  The result is a string,
containing the object's docstring converted to a Python script, as described for
`script_from_examples` above.  For example, if module `a.py`
contains a top-level function `f`, then ::

   import a, doctest
   print(doctest.testsource(a, "a.f"))

prints a script version of function `f`'s docstring, with doctests
converted to code, and the rest placed in comments.
