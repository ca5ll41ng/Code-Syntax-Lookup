---
id: "python-en-function-atexit-unregister"
language: "python"
lang: "en"
category: "function"
name: "unregister"
signature: "unregister(func)"
directive: "function"
module: "atexit"
source_url: "https://docs.python.org/3/library/atexit.html#atexit.unregister"
license: "PSF"
updated: "2026-10-01"
---

# unregister

Remove *func* from the list of exit handlers.
`unregister` silently does nothing if *func* was not previously
registered.  If *func* has been registered more than once, every occurrence
of that function in the `atexit` call stack will be removed.  Equality
comparisons (`==`) are used internally during unregistration, so function
references do not need to have matching identities.
