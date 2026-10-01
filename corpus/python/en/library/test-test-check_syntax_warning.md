---
id: "python-en-function-test-check_syntax_warning"
language: "python"
lang: "en"
category: "function"
name: "check_syntax_warning"
signature: "check_syntax_warning(testcase, statement, errtext='', *, lineno=1, offset=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.check_syntax_warning"
license: "PSF"
updated: "2026-10-01"
---

# check_syntax_warning

Test for syntax warning in *statement* by attempting to compile *statement*.
Test also that the `SyntaxWarning` is emitted only once, and that it
will be converted to a `SyntaxError` when turned into error.
*testcase* is the `unittest` instance for the test.  *errtext* is the
regular expression which should match the string representation of the
emitted `SyntaxWarning` and raised `SyntaxError`.  If *lineno*
is not `None`, compares to the line of the warning and exception.
If *offset* is not `None`, compares to the offset of the exception.

> *Added in 3.8*
