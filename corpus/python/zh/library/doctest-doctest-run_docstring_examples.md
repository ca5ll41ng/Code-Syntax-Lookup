---
id: "python-zh-function-doctest-run_docstring_examples"
language: "python"
lang: "zh"
category: "function"
name: "run_docstring_examples"
signature: "run_docstring_examples(f, globs, verbose=False, name=\"NoName\", compileflags=None, optionflags=0)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.run_docstring_examples"
license: "PSF"
updated: "2026-10-01"
---

# run_docstring_examples

Test examples associated with object *f*; for example, *f* may be a string,
a module, a function, or a class object.

dict 参数 *globs* 的浅层拷贝被用于执行环境。

Optional argument *name* is used in failure messages, and defaults to
`"NoName"`.

If optional argument *verbose* is true, output is generated even if there are no
failures.  By default, output is generated only in case of an example failure.

Optional argument *compileflags* gives the set of flags that should be used by
the Python compiler when running the examples.  By default, or if `None`,
flags are deduced corresponding to the set of future features found in *globs*.

可选参数 *optionflags* 的作用与上述 :func:`testfile` 函数中的相同。
