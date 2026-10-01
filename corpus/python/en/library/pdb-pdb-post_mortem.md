---
id: "python-en-function-pdb-post_mortem"
language: "python"
lang: "en"
category: "function"
name: "post_mortem"
signature: "post_mortem(t=None)"
directive: "function"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#pdb.post_mortem"
license: "PSF"
updated: "2026-10-01"
---

# post_mortem

Enter post-mortem debugging of the given exception or
`traceback object`. If no value is given, it uses
the exception that is currently being handled, or raises `ValueError` if
there isn’t one.

> *Changed in 3.13*: Support for exception objects was added.
