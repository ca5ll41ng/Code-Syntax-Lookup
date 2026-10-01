---
id: "python-en-function-sys-_getframemodulename"
language: "python"
lang: "en"
category: "function"
name: "_getframemodulename"
signature: "_getframemodulename([depth])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys._getframemodulename"
license: "PSF"
updated: "2026-10-01"
---

# _getframemodulename

Return the name of a module from the call stack.  If optional integer *depth*
is given, return the module that many calls below the top of the stack.  If
that is deeper than the call stack, or if the module is unidentifiable,
`None` is returned.  The default for *depth* is zero, returning the
module at the top of the call stack.

audit-event:: sys._getframemodulename depth sys._getframemodulename

impl-detail::

> *Added in 3.12*
