---
id: "python-en-function-builtins-bytes-rsplit"
language: "python"
lang: "en"
category: "function"
name: "bytes.rsplit"
signature: "bytes.rsplit(sep=None, maxsplit=-1)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.rsplit"
license: "PSF"
updated: "2026-10-01"
---

# bytes.rsplit

Split the binary sequence into subsequences of the same type, using *sep*
as the delimiter string. If *maxsplit* is given, at most *maxsplit* splits
are done, the *rightmost* ones.  If *sep* is not specified or `None`,
any subsequence consisting solely of
`ASCII whitespace` is a separator.
Except for splitting from the right, `rsplit` behaves like
`split` which is described in detail below.
