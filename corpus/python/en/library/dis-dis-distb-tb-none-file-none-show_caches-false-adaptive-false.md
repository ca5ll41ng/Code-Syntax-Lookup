---
id: "python-en-function-dis-distb-tb-none-file-none-show_caches-false-adaptive-false"
language: "python"
lang: "en"
category: "function"
name: "distb(tb=None, *, file=None, show_caches=False, adaptive=False,\\"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.distb(tb=None, *, file=None, show_caches=False, adaptive=False,\\"
license: "PSF"
updated: "2026-10-01"
---

# distb(tb=None, *, file=None, show_caches=False, adaptive=False,\

Disassemble the top-of-stack function of a traceback, using the last
traceback if none was passed.  The instruction causing the exception is
indicated.

The disassembly is written as text to the supplied *file* argument if
provided and to `sys.stdout` otherwise.

> *Changed in 3.4*: Added *file* parameter.

> *Changed in 3.11*: Added the *show_caches* and *adaptive* parameters.

> *Changed in 3.13*: Added the *show_offsets* parameter.

> *Changed in 3.14*: Added the *show_positions* parameter.

> *Changed in next*: Added the *show_jit* parameter.
