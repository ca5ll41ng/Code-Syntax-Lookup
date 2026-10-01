---
id: "python-en-function-sys-abiflags"
language: "python"
lang: "en"
category: "function"
name: "abiflags"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.abiflags"
license: "PSF"
updated: "2026-10-01"
---

# abiflags

On POSIX systems where Python was built with the standard `configure`
script, this contains the ABI flags as specified by PEP 3149.

> *Added in 3.2*

> *Changed in 3.8*: Default flags became an empty string (``m`` flag for pymalloc has been removed).

availability:: Unix.
