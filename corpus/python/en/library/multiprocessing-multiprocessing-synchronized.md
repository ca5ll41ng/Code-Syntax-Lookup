---
id: "python-en-function-multiprocessing-synchronized"
language: "python"
lang: "en"
category: "function"
name: "synchronized"
signature: "synchronized(obj, lock=None, ctx=None)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.synchronized"
license: "PSF"
updated: "2026-10-01"
---

# synchronized

Return a process-safe wrapper object for a ctypes object which uses *lock* to
synchronize access.  If *lock* is `None` (the default) then a
`multiprocessing.RLock` object is created automatically.

*ctx* is a context object, or `None` (use the current context). If `None`,
calling this may set the global start method. See
`global-start-method` for more details.

A synchronized wrapper will have two methods in addition to those of the
object it wraps: `get_obj` returns the wrapped object and
`get_lock` returns the lock object used for synchronization.

Note that accessing the ctypes object through the wrapper can be a lot slower
than accessing the raw ctypes object.

> *Changed in 3.5*: Synchronized objects support the :term:`context manager` protocol.
