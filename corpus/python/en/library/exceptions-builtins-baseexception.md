---
id: "python-en-function-builtins-baseexception"
language: "python"
lang: "en"
category: "function"
name: "BaseException"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#BaseException"
license: "PSF"
updated: "2026-10-01"
---

# BaseException

The base class for all built-in exceptions.  It is not meant to be directly
inherited by user-defined classes (for that, use `Exception`).  If
`str` is called on an instance of this class, the representation of
the argument(s) to the instance are returned, or the empty string when
there were no arguments.

attribute:: args

method:: with_traceback(tb)

attribute:: __traceback__

method:: add_note(note)

attribute:: __notes__
