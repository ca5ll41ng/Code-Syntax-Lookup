---
id: "python-en-function-sys-setdlopenflags"
language: "python"
lang: "en"
category: "function"
name: "setdlopenflags"
signature: "setdlopenflags(n)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.setdlopenflags"
license: "PSF"
updated: "2026-10-01"
---

# setdlopenflags

Set the flags used by the interpreter for :c`dlopen` calls, such as when
the interpreter loads extension modules.  Among other things, this will enable a
lazy resolving of symbols when importing a module, if called as
`sys.setdlopenflags(0)`.  To share symbols across extension modules, call as
`sys.setdlopenflags(os.RTLD_GLOBAL)`.  Symbolic names for the flag values
can be found in the `os` module (`RTLD_{xxx}` constants, e.g.
`os.RTLD_LAZY`).

availability:: Unix.
