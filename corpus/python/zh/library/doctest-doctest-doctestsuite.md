---
id: "python-zh-function-doctest-doctestsuite"
language: "python"
lang: "zh"
category: "function"
name: "DocTestSuite"
signature: "DocTestSuite(module=None, globs=None, extraglobs=None, test_finder=None, setUp=None, tearDown=None, optionflags=0, checker=None)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.DocTestSuite"
license: "PSF"
updated: "2026-10-01"
---

# DocTestSuite

将一个模块的 doctest 测试转换为 :class:`unittest.TestSuite`。

The returned `unittest.TestSuite` is to be run by the unittest
framework and runs each doctest in the module.
Each docstring is run as a separate unit test, and each example in
a docstring is run as a `subtest`.
If any of the doctests fail, then the synthesized unit test fails.
The traceback for failure or error contains the name of the file
containing the test and a (sometimes approximate) line number.
If all the examples in a docstring are skipped, then the
synthesized unit test is also marked as skipped.

Optional argument *module* provides the module to be tested.  It can be a module
object or a (possibly dotted) module name.  If not specified, the module calling
this function is used.

Optional argument *globs* is a dictionary containing the initial global
variables for the tests.  A new copy of this dictionary is created for each
test.  By default, *globs* is the module's `~module.__dict__`.

Optional argument *extraglobs* specifies an extra set of global variables, which
is merged into *globs*.  By default, no extra globals are used.

Optional argument *test_finder* is the `DocTestFinder` object (or a
drop-in replacement) that is used to extract doctests from the module.

Optional arguments *setUp*, *tearDown*, and *optionflags* are the same as for
function `DocFileSuite` above, but they are called for each docstring.

这个函数使用与 :func:`testmod` 相同的搜索技术。

> *Changed in 3.5*: :func:`DocTestSuite` returns an empty :class:`unittest.TestSuite` if *module* contains no docstrings instead of raising :exc:`ValueError`.

> *Changed in 3.15*: Run each example as a :ref:`subtest <subtests>`.

> *Changed in next*: Report every example, as in verbose mode, if the test runner reports more than the test names, i.e. its :attr:`~unittest.TestResult.verbosity` is 3 or higher (for example with ``python -m unittest -vv``).
