---
id: "python-en-function-re-patternerror"
language: "python"
lang: "en"
category: "function"
name: "PatternError"
signature: "PatternError(msg, pattern=None, pos=None)"
directive: "exception"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.PatternError"
license: "PSF"
updated: "2026-10-01"
---

# PatternError

Exception raised when a string passed to one of the functions here is not a
valid regular expression (for example, it might contain unmatched parentheses)
or when some other error occurs during compilation or matching.  It is never an
error if a string contains no match for a pattern.  The `PatternError` instance has
the following additional attributes:

attribute:: msg

attribute:: pattern

attribute:: pos

attribute:: lineno

attribute:: colno

> *Changed in 3.5*: Added additional attributes.

> *Changed in 3.13*: ``PatternError`` was originally named ``error``; the latter is kept as an alias for backward compatibility.
