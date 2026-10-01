---
id: "python-en-function-threading-lock"
language: "python"
lang: "en"
category: "function"
name: "Lock"
signature: "Lock()"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Lock"
license: "PSF"
updated: "2026-10-01"
---

# Lock

The class implementing primitive lock objects.  Once a thread has acquired a
lock, subsequent attempts to acquire it block, until it is released; any
thread may release it.

> *Changed in 3.13*: ``Lock`` is now a class. In earlier Pythons, ``Lock`` was a factory function which returned an instance of the underlying private lock type.

method:: acquire(blocking=True, timeout=-1)

method:: release()

method:: locked()
