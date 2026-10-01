---
id: "python-en-function-sys-getallocatedblocks"
language: "python"
lang: "en"
category: "function"
name: "getallocatedblocks"
signature: "getallocatedblocks()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getallocatedblocks"
license: "PSF"
updated: "2026-10-01"
---

# getallocatedblocks

Return the number of memory blocks currently allocated by the interpreter,
regardless of their size.  This function is mainly useful for tracking
and debugging memory leaks.  Because of the interpreter's internal
caches, the result can vary from call to call; you may have to call
`_clear_internal_caches` and `gc.collect` to get more
predictable results.

If a Python build or implementation cannot reasonably compute this
information, `getallocatedblocks` is allowed to return 0 instead.

> *Added in 3.4*
