---
id: "python-en-function-faulthandler-register"
language: "python"
lang: "en"
category: "function"
name: "register"
signature: "register(signum, file=sys.stderr, all_threads=True, chain=False, *, max_threads=100)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/3/library/faulthandler.html#faulthandler.register"
license: "PSF"
updated: "2026-10-01"
---

# register

Register a user signal: install a handler for the *signum* signal to dump
the traceback of all threads, or of the current thread if *all_threads* is
`False`, into *file*. Call the previous handler if chain is `True`.
*max_threads* caps the number of threads dumped.

The *file* must be kept open until the signal is unregistered by
`unregister`: see `issue with file descriptors`.

Not available on Windows.

> *Changed in 3.5*: Added support for passing file descriptor to this function.

> *Changed in 3.15*: Added the *max_threads* keyword argument.
