---
id: "python-en-function-test-interpreter_requires_environment"
language: "python"
lang: "en"
category: "function"
name: "interpreter_requires_environment"
signature: "interpreter_requires_environment()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.interpreter_requires_environment"
license: "PSF"
updated: "2026-10-01"
---

# interpreter_requires_environment

Return `True` if `sys.executable interpreter` requires environment
variables in order to be able to run at all.

This is designed to be used with `@unittest.skipIf()` to annotate tests
that need to use an `assert_python*()` function to launch an isolated
mode (`-I`) or no environment mode (`-E`) sub-interpreter process.

A normal build & test does not run into this situation but it can happen
when trying to run the standard library test suite from an interpreter that
doesn't have an obvious home with Python's current home finding logic.

Setting `PYTHONHOME` is one way to get most of the testsuite to run
in that situation.  `PYTHONPATH` or `PYTHONUSERSITE` are
other common environment variables that might impact whether or not the
interpreter can start.
