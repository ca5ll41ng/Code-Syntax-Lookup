---
id: "python-en-function-difflib-restore"
language: "python"
lang: "en"
category: "function"
name: "restore"
signature: "restore(sequence, which)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.restore"
license: "PSF"
updated: "2026-10-01"
---

# restore

Return one of the two sequences that generated a delta.

Given a *sequence* produced by `Differ.compare` or `ndiff`, extract
lines originating from file 1 or 2 (parameter *which*), stripping off line
prefixes.

Example:

   >>> diff = ndiff('one\ntwo\nthree\n'.splitlines(keepends=True),
   ...              'ore\ntree\nemu\n'.splitlines(keepends=True))
   >>> diff = list(diff) # materialize the generated delta into a list
   >>> print(''.join(restore(diff, 1)), end="")
   one
   two
   three
   >>> print(''.join(restore(diff, 2)), end="")
   ore
   tree
   emu
