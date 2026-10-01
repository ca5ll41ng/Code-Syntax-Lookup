---
id: "python-en-function-threading-get_ident"
language: "python"
lang: "en"
category: "function"
name: "get_ident"
signature: "get_ident()"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.get_ident"
license: "PSF"
updated: "2026-10-01"
---

# get_ident

Return the 'thread identifier' of the current thread.  This is a nonzero
integer.  Its value has no direct meaning; it is intended as a magic cookie
to be used e.g. to index a dictionary of thread-specific data.  Thread
identifiers may be recycled when a thread exits and another thread is
created.

> *Added in 3.3*
