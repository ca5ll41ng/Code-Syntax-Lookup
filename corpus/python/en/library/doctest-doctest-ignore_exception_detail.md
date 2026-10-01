---
id: "python-en-function-doctest-ignore_exception_detail"
language: "python"
lang: "en"
category: "function"
name: "IGNORE_EXCEPTION_DETAIL"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.IGNORE_EXCEPTION_DETAIL"
license: "PSF"
updated: "2026-10-01"
---

# IGNORE_EXCEPTION_DETAIL

When specified, doctests expecting exceptions pass so long as an exception
of the expected type is raised, even if the details
(message and fully qualified exception name) don't match.

For example, an example expecting `ValueError: 42` will pass if the actual
exception raised is `ValueError: 3*14`, but will fail if, say, a
`TypeError` is raised instead.
It will also ignore any fully qualified name included before the
exception class, which can vary between implementations and versions
of Python and the code/libraries in use.
Hence, all three of these variations will work with the flag specified:

```pycon

>>> raise Exception('message')
Traceback (most recent call last):
Exception: message

>>> raise Exception('message')
Traceback (most recent call last):
builtins.Exception: message

>>> raise Exception('message')
Traceback (most recent call last):
__main__.Exception: message
```

Note that `ELLIPSIS` can also be used to ignore the
details of the exception message, but such a test may still fail based
on whether the module name is present or matches exactly.

> *Changed in 3.2*: :const:`IGNORE_EXCEPTION_DETAIL` now also ignores any information relating to the module containing the exception under test.
