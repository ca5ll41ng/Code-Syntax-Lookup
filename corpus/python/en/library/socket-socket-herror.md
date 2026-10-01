---
id: "python-en-function-socket-herror"
language: "python"
lang: "en"
category: "function"
name: "herror"
directive: "exception"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.herror"
license: "PSF"
updated: "2026-10-01"
---

# herror

A subclass of `OSError`, this exception is raised for
address-related errors, i.e. for functions that use *h_errno* in the POSIX
C API, including `gethostbyname_ex` and `gethostbyaddr`.
The accompanying value is a pair `(h_errno, string)` representing an
error returned by a library call.  *h_errno* is a numeric value, while
*string* represents the description of *h_errno*, as returned by the
:c`hstrerror` C function.

> *Changed in 3.3*: This class was made a subclass of :exc:`OSError`.
