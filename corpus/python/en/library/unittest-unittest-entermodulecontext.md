---
id: "python-en-function-unittest-entermodulecontext"
language: "python"
lang: "en"
category: "function"
name: "enterModuleContext"
signature: "enterModuleContext(cm)"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.enterModuleContext"
license: "PSF"
updated: "2026-10-01"
---

# enterModuleContext

Enter the supplied `context manager`.  If successful, also
add its `~object.__exit__` method as a cleanup function by
`addModuleCleanup` and return the result of the
`~object.__enter__` method.

> *Added in 3.11*
