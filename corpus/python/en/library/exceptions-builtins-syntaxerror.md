---
id: "python-en-function-builtins-syntaxerror"
language: "python"
lang: "en"
category: "function"
name: "SyntaxError"
signature: "SyntaxError(message, details)"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#SyntaxError"
license: "PSF"
updated: "2026-10-01"
---

# SyntaxError

Raised when the parser encounters a syntax error.  This may occur in an
`import` statement, in a call to the built-in functions
`compile`, `exec`,
or `eval`, or when reading the initial script or standard input
(also interactively).

The `str` of the exception instance returns only the error message.
Details is a tuple whose members are also available as separate attributes.

attribute:: filename

attribute:: lineno

attribute:: offset

attribute:: text

attribute:: end_lineno

attribute:: end_offset

For errors in f-string fields, the message is prefixed by "f-string: "
and the offsets are offsets in a text constructed from the replacement
expression.  For example, compiling f'Bad {a b} field' results in this
args attribute: ('f-string: ...', ('', 1, 2, '(a b)\n', 1, 5)).

> *Changed in 3.10*: Added the :attr:`end_lineno` and :attr:`end_offset` attributes.
