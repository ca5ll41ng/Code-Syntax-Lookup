---
id: "python-en-function-builtins-bytes-startswith"
language: "python"
lang: "en"
category: "function"
name: "bytes.startswith"
signature: "bytes.startswith(prefix[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.startswith"
license: "PSF"
updated: "2026-10-01"
---

# bytes.startswith

Return `True` if the binary data starts with the specified *prefix*,
otherwise return `False`.  *prefix* can also be a tuple of prefixes to
look for.  With optional *start*, test beginning at that position.  With
optional *end*, stop comparing at that position.

The prefix(es) to search for may be any `bytes-like object`.
