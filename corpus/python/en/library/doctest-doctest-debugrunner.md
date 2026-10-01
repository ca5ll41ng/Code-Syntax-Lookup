---
id: "python-en-function-doctest-debugrunner"
language: "python"
lang: "en"
category: "function"
name: "DebugRunner"
signature: "DebugRunner(checker=None, verbose=None, optionflags=0)"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.DebugRunner"
license: "PSF"
updated: "2026-10-01"
---

# DebugRunner

A subclass of `DocTestRunner` that raises an exception as soon as a
failure is encountered.  If an unexpected exception occurs, an
`UnexpectedException` exception is raised, containing the test, the
example, and the original exception.  If the output doesn't match, then a
`DocTestFailure` exception is raised, containing the test, the example, and
the actual output.

For information about the constructor parameters and methods, see the
documentation for `DocTestRunner` in section `doctest-advanced-api`.
