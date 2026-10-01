---
id: "python-en-function-socket-sethostname"
language: "python"
lang: "en"
category: "function"
name: "sethostname"
signature: "sethostname(name)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.sethostname"
license: "PSF"
updated: "2026-10-01"
---

# sethostname

Set the machine's hostname to *name*.  This will raise an
`OSError` if you don't have enough rights.

audit-event:: socket.sethostname name socket.sethostname

availability:: Unix.

> *Added in 3.3*

> *Changed in 3.16*: Support for Android now exists.
