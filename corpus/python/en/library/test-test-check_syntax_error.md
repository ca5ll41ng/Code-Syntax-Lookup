---
id: "python-en-function-test-check_syntax_error"
language: "python"
lang: "en"
category: "function"
name: "check_syntax_error"
signature: "check_syntax_error(testcase, statement, errtext='', *, lineno=None, offset=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.check_syntax_error"
license: "PSF"
updated: "2026-10-01"
---

# check_syntax_error

Test for syntax errors in *statement* by attempting to compile *statement*.
*testcase* is the `unittest` instance for the test.  *errtext* is the
regular expression which should match the string representation of the
raised `SyntaxError`.  If *lineno* is not `None`, compares to
the line of the exception.  If *offset* is not `None`, compares to
the offset of the exception.
