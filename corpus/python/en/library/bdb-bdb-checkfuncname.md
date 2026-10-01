---
id: "python-en-function-bdb-checkfuncname"
language: "python"
lang: "en"
category: "function"
name: "checkfuncname"
signature: "checkfuncname(b, frame)"
directive: "function"
module: "bdb"
source_url: "https://docs.python.org/3/library/bdb.html#bdb.checkfuncname"
license: "PSF"
updated: "2026-10-01"
---

# checkfuncname

Return `True` if we should break here, depending on the way the
`Breakpoint` *b* was set.

If it was set via line number, it checks if
`b.line` is the same as the one in *frame*.
If the breakpoint was set via
`function name`, we have to check we are in
the right *frame* (the right function) and if we are on its first executable
line.
