---
id: "python-en-function-socket-setdefaulttimeout"
language: "python"
lang: "en"
category: "function"
name: "setdefaulttimeout"
signature: "setdefaulttimeout(timeout)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.setdefaulttimeout"
license: "PSF"
updated: "2026-10-01"
---

# setdefaulttimeout

Set the default timeout in seconds (real number) for new socket objects.  When
the socket module is first imported, the default is `None`.  See
`~socket.settimeout` for possible values and their respective
meanings.

> *Changed in 3.15*: Accepts any real number, not only integer or float.
