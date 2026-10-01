---
id: "python-en-function-multiprocessing-get_context"
language: "python"
lang: "en"
category: "function"
name: "get_context"
signature: "get_context(method=None)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.get_context"
license: "PSF"
updated: "2026-10-01"
---

# get_context

Return a context object which has the same attributes as the
`multiprocessing` module.

If *method* is `None` then the default context is returned. Note that if
the global start method has not been set, this will set it to the system default
See `global-start-method` for more details.
Otherwise *method* should be `'fork'`, `'spawn'`,
`'forkserver'`.  `ValueError` is raised if the specified
start method is not available.  See `multiprocessing-start-methods`.

> *Added in 3.4*
