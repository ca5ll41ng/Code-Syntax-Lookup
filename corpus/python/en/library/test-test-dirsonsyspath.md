---
id: "python-en-function-test-dirsonsyspath"
language: "python"
lang: "en"
category: "function"
name: "DirsOnSysPath"
signature: "DirsOnSysPath(*paths)"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.DirsOnSysPath"
license: "PSF"
updated: "2026-10-01"
---

# DirsOnSysPath

A context manager to temporarily add directories to `sys.path`.

This makes a copy of `sys.path`, appends any directories given
as positional arguments, then reverts `sys.path` to the copied
settings when the context ends.

Note that *all* `sys.path` modifications in the body of the
context manager, including replacement of the object,
will be reverted at the end of the block.
