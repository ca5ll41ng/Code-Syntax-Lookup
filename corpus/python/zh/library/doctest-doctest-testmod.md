---
id: "python-zh-function-doctest-testmod"
language: "python"
lang: "zh"
category: "function"
name: "testmod"
signature: "testmod(m=None, name=None, globs=None, verbose=None, report=True, optionflags=0, extraglobs=None, raise_on_error=False, exclude_empty=False)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.testmod"
license: "PSF"
updated: "2026-10-01"
---

# testmod

All arguments are optional, and all except for *m* should be specified in
keyword form.

Test examples in docstrings in functions and classes reachable from module *m*
(or module `__main__` if *m* is not supplied or is `None`), starting with
`m.__doc__`.

Also test examples reachable from dict `m.__test__`, if it exists.
`m.__test__` maps names (strings) to functions, classes and
strings; function and class docstrings are searched for examples; strings are
searched directly, as if they were docstrings.

只搜索附属于模块 *m* 中的对象的文档串。

返回 ``(failure_count, test_count)``。

Optional argument *name* gives the name of the module; by default, or if
`None`, `m.__name__` is used.

Optional argument *exclude_empty* defaults to false.  If true, objects for which
no doctests are found are excluded from consideration. The default is a backward
compatibility hack, so that code still using
`doctest.master.summarize` in
conjunction with `testmod` continues to get output for objects with no
tests. The *exclude_empty* argument to the newer `DocTestFinder`
constructor defaults to true.

Optional arguments *extraglobs*, *verbose*, *report*, *optionflags*,
*raise_on_error*, and *globs* are the same as for function `testfile`
above, except that *globs* defaults to `m.__dict__`.
