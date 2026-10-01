---
id: "python-en-function-builtins-oserror"
language: "python"
lang: "en"
category: "function"
name: "OSError"
signature: "OSError([arg])"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#OSError"
license: "PSF"
updated: "2026-10-01"
---

# OSError

This exception is raised when a system function returns a system-related
error, including I/O failures such as "file not found" or "disk full"
(not for illegal argument types or other incidental errors).

The second form of the constructor sets the corresponding attributes,
described below.  The attributes default to `None` if not
specified.  For backwards compatibility, if three arguments are passed,
the `~BaseException.args` attribute contains only a 2-tuple
of the first two constructor arguments.

The constructor often actually returns a subclass of `OSError`, as
described in `OS exceptions`_ below.  The particular subclass depends on
the final `.errno` value.  This behaviour only occurs when
constructing `OSError` directly or via an alias, and is not
inherited when subclassing.

attribute:: errno

attribute:: winerror

attribute:: strerror

attribute:: filename

> *Changed in 3.3*: :exc:`EnvironmentError`, :exc:`IOError`, :exc:`WindowsError`, :exc:`socket.error`, :exc:`select.error` and :exc:`!mmap.error` have been merged into :exc:`OSError`, and the constructor may return a subclass.

> *Changed in 3.4*: The :attr:`filename` attribute is now the original file name passed to the function, instead of the name encoded to or decoded from the :term:`filesystem encoding and error handler`. Also, the *filename2* constructor argument and attribute was added.
