---
id: "python-en-function-multiprocessing-lock"
language: "python"
lang: "en"
category: "function"
name: "Lock"
signature: "Lock()"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Lock"
license: "PSF"
updated: "2026-10-01"
---

# Lock

A non-recursive lock object: a close analog of `threading.Lock`.
Once a process or thread has acquired a lock, subsequent attempts to
acquire it from any process or thread will block until it is released;
any process or thread may release it.  The concepts and behaviors of
`threading.Lock` as it applies to threads are replicated here in
`multiprocessing.Lock` as it applies to either processes or threads,
except as noted.

Note that `Lock` is actually a factory function which returns an
instance of `multiprocessing.synchronize.Lock` initialized with a
default context.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

`Lock` supports the `context manager` protocol and thus may be
used in `with` statements.

method:: acquire(block=True, timeout=None)

method:: release()

method:: locked()
