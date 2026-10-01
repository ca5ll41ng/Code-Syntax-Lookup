---
id: "python-en-function-sys-getrecursionlimit"
language: "python"
lang: "en"
category: "function"
name: "getrecursionlimit"
signature: "getrecursionlimit()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.getrecursionlimit"
license: "PSF"
updated: "2026-10-01"
---

# getrecursionlimit

Return the current value of the recursion limit, the maximum depth of the Python
interpreter stack.  This limit prevents infinite recursion from causing an
overflow of the C stack and crashing Python.  It can be set by
`setrecursionlimit`.
