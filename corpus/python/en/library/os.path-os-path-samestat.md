---
id: "python-en-function-os-path-samestat"
language: "python"
lang: "en"
category: "function"
name: "samestat"
signature: "samestat(stat1, stat2, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.samestat"
license: "PSF"
updated: "2026-10-01"
---

# samestat

Return `True` if the stat tuples *stat1* and *stat2* refer to the same file.
These structures may have been returned by `os.fstat`,
`os.lstat`, or `os.stat`.  This function implements the
underlying comparison used by `samefile` and `sameopenfile`.

> *Changed in 3.4*: Added Windows support.
