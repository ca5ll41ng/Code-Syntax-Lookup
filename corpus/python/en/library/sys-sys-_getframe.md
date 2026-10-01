---
id: "python-en-function-sys-_getframe"
language: "python"
lang: "en"
category: "function"
name: "_getframe"
signature: "_getframe([depth])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys._getframe"
license: "PSF"
updated: "2026-10-01"
---

# _getframe

Return a frame object from the call stack.  If optional integer *depth* is
given, return the frame object that many calls below the top of the stack.  If
that is deeper than the call stack, `ValueError` is raised.  The default
for *depth* is zero, returning the frame at the top of the call stack.

audit-event:: sys._getframe frame sys._getframe

impl-detail::
