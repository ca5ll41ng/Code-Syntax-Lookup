---
id: "python-en-function-builtins-str-rsplit"
language: "python"
lang: "en"
category: "function"
name: "str.rsplit"
signature: "str.rsplit(sep=None, maxsplit=-1)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rsplit"
license: "PSF"
updated: "2026-10-01"
---

# str.rsplit

Return a list of the words in the string, using *sep* as the delimiter string.
If *maxsplit* is given, at most *maxsplit* splits are done, the *rightmost*
ones.  If *sep* is not specified or `None`, any
`whitespace` string is a
separator.  Except for splitting from the right, `rsplit` behaves like
`split` which is described in detail below.
