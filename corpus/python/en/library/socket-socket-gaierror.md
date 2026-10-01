---
id: "python-en-function-socket-gaierror"
language: "python"
lang: "en"
category: "function"
name: "gaierror"
directive: "exception"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.gaierror"
license: "PSF"
updated: "2026-10-01"
---

# gaierror

A subclass of `OSError`, this exception is raised for
address-related errors by `getaddrinfo` and `getnameinfo`.
The accompanying value is a pair `(error, string)` representing an error
returned by a library call.  *string* represents the description of
*error*, as returned by the :c`gai_strerror` C function.  The
numeric *error* value will match one of the `EAI_\*` constants
defined in this module.

> *Changed in 3.3*: This class was made a subclass of :exc:`OSError`.
