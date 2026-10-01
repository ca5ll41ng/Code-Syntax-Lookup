---
id: "python-en-function-multiprocessing-rlock"
language: "python"
lang: "en"
category: "function"
name: "RLock"
signature: "RLock()"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.RLock"
license: "PSF"
updated: "2026-10-01"
---

# RLock

A recursive lock object: a close analog of `threading.RLock`.  A
recursive lock must be released by the process or thread that acquired it.
Once a process or thread has acquired a recursive lock, the same process
or thread may acquire it again without blocking; that process or thread
must release it once for each time it has been acquired.

Note that `RLock` is actually a factory function which returns an
instance of `multiprocessing.synchronize.RLock` initialized with a
default context.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

`RLock` supports the `context manager` protocol and thus may be
used in `with` statements.

method:: acquire(block=True, timeout=None)

method:: release()

method:: locked()
