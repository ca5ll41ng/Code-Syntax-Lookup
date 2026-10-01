---
id: "python-en-function-multiprocessing-set_forkserver_preload"
language: "python"
lang: "en"
category: "function"
name: "set_forkserver_preload"
signature: "set_forkserver_preload(module_names, *, on_error='ignore')"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.set_forkserver_preload"
license: "PSF"
updated: "2026-10-01"
---

# set_forkserver_preload

Set a list of module names for the forkserver main process to attempt to
import so that their already imported state is inherited by forked
processes. This can be used as a performance enhancement to avoid repeated
work in every process.

For this to work, it must be called before the forkserver process has been
launched (before creating a `Pool` or starting a `Process`).

The *on_error* parameter controls how `ImportError` exceptions during
module preloading are handled: `"ignore"` (default) silently ignores
failures, `"warn"` causes the forkserver subprocess to emit an
`ImportWarning` to stderr, and `"fail"` causes the forkserver
subprocess to exit with the exception traceback on stderr, making
subsequent process creation fail with `EOFError` or
`ConnectionError`.

Only meaningful when using the `'forkserver'` start method.
See `multiprocessing-start-methods`.

> *Added in 3.4*

> *Changed in 3.15*: Added the *on_error* parameter.
