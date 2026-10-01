---
id: "python-en-function-unittest-addmodulecleanup"
language: "python"
lang: "en"
category: "function"
name: "addModuleCleanup"
signature: "addModuleCleanup(function, /, *args, **kwargs)"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.addModuleCleanup"
license: "PSF"
updated: "2026-10-01"
---

# addModuleCleanup

Add a function to be called after `tearDownModule` to cleanup
resources used during the test class. Functions will be called in reverse
order to the order they are added (`LIFO (last-in, first-out)`).
They are called with any arguments and keyword arguments passed into
`addModuleCleanup` when they are added.

If `setUpModule` fails, meaning that `tearDownModule` is not
called, then any cleanup functions added will still be called.

> *Added in 3.8*
