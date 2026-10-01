---
id: "python-en-function-unittest-domodulecleanups"
language: "python"
lang: "en"
category: "function"
name: "doModuleCleanups"
signature: "doModuleCleanups()"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.doModuleCleanups"
license: "PSF"
updated: "2026-10-01"
---

# doModuleCleanups

This function is called unconditionally after `tearDownModule`, or
after `setUpModule` if `setUpModule` raises an exception.

It is responsible for calling all the cleanup functions added by
`addModuleCleanup`. If you need cleanup functions to be called
*prior* to `tearDownModule` then you can call
`doModuleCleanups` yourself.

`doModuleCleanups` pops methods off the stack of cleanup
functions one at a time, so it can be called at any time.

> *Added in 3.8*
