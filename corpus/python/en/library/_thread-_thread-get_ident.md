---
id: "python-en-function-_thread-get_ident"
language: "python"
lang: "en"
category: "function"
name: "get_ident"
signature: "get_ident()"
directive: "function"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#_thread.get_ident"
license: "PSF"
updated: "2026-10-01"
---

# get_ident

Return the 'thread identifier' of the current thread.  This is a nonzero
integer.  Its value has no direct meaning; it is intended as a magic cookie to
be used e.g. to index a dictionary of thread-specific data.  Thread identifiers
may be recycled when a thread exits and another thread is created.
