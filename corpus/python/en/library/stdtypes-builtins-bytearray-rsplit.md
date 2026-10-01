---
id: "python-en-function-builtins-bytearray-rsplit"
language: "python"
lang: "en"
category: "function"
name: "bytearray.rsplit"
signature: "bytearray.rsplit(sep=None, maxsplit=-1)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.rsplit"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.rsplit

Split the binary sequence into subsequences of the same type, using *sep*
as the delimiter string. If *maxsplit* is given, at most *maxsplit* splits
are done, the *rightmost* ones.  If *sep* is not specified or `None`,
any subsequence consisting solely of
`ASCII whitespace` is a separator.
Except for splitting from the right, `rsplit` behaves like
`split` which is described in detail below.
