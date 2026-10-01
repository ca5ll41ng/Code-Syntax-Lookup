---
id: "python-en-function-threading-rlock"
language: "python"
lang: "en"
category: "function"
name: "RLock"
signature: "RLock()"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.RLock"
license: "PSF"
updated: "2026-10-01"
---

# RLock

This class implements reentrant lock objects.  A reentrant lock must be
released by the thread that acquired it.  Once a thread has acquired a
reentrant lock, the same thread may acquire it again without blocking; the
thread must release it once for each time it has acquired it.

Note that `RLock` is actually a factory function which returns an instance
of the most efficient version of the concrete RLock class that is supported
by the platform.

method:: acquire(blocking=True, timeout=-1)

method:: release()

method:: locked()
