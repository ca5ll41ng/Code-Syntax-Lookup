---
id: "python-en-function-faulthandler-dump_traceback"
language: "python"
lang: "en"
category: "function"
name: "dump_traceback"
signature: "dump_traceback(file=sys.stderr, all_threads=True, *, max_threads=100)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/3/library/faulthandler.html#faulthandler.dump_traceback"
license: "PSF"
updated: "2026-10-01"
---

# dump_traceback

Dump the tracebacks of all threads into *file*. If *all_threads* is
`False`, dump only the current thread. *max_threads* caps the number
of threads dumped.

> **Seealso**
>
>

> *Changed in 3.5*: Added support for passing file descriptor to this function.

> *Changed in 3.15*: Added the *max_threads* keyword argument.
