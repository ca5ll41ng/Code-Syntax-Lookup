---
id: "python-en-function-sys-call_tracing"
language: "python"
lang: "en"
category: "function"
name: "call_tracing"
signature: "call_tracing(func, args)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.call_tracing"
license: "PSF"
updated: "2026-10-01"
---

# call_tracing

Call `func(*args)`, while tracing is enabled.  The tracing state is saved,
and restored afterwards.  This is intended to be called from a debugger from
a checkpoint, to recursively debug or profile some other code.

Tracing is suspended while calling a tracing function set by
`settrace` or `setprofile` to avoid infinite recursion.
`call_tracing` enables explicit recursion of the tracing function.
