---
id: "python-en-function-sys-getdlopenflags"
language: "python"
lang: "en"
category: "function"
name: "getdlopenflags"
signature: "getdlopenflags()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getdlopenflags"
license: "PSF"
updated: "2026-10-01"
---

# getdlopenflags

Return the current value of the flags that are used for
:c`dlopen` calls.  Symbolic names for the flag values can be
found in the `os` module (`RTLD_{xxx}` constants, e.g.
`os.RTLD_LAZY`).

availability:: Unix.
