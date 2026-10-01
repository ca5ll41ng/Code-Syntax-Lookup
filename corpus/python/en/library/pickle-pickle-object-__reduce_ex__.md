---
id: "python-en-function-pickle-object-__reduce_ex__"
language: "python"
lang: "en"
category: "function"
name: "object.__reduce_ex__"
signature: "object.__reduce_ex__(protocol)"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__reduce_ex__"
license: "PSF"
updated: "2026-10-01"
---

# object.__reduce_ex__

Alternatively, a `__reduce_ex__` method may be defined.  The only
difference is this method should take a single integer argument, the protocol
version.  When defined, pickle will prefer it over the `__reduce__`
method.  In addition, `__reduce__` automatically becomes a synonym for
the extended version.  The main use for this method is to provide
backwards-compatible reduce values for older Python releases.
