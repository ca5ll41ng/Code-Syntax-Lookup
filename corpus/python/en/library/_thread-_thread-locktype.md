---
id: "python-en-function-_thread-locktype"
language: "python"
lang: "en"
category: "function"
name: "LockType"
directive: "class"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#_thread.LockType"
license: "PSF"
updated: "2026-10-01"
---

# LockType

This is the type of lock objects.

Lock objects have the following methods:

method:: acquire(blocking=True, timeout=-1)

method:: release()

method:: locked()

In addition to these methods, lock objects can also be used via the
`with` statement, e.g.::

   import _thread

   a_lock = _thread.allocate_lock()

   with a_lock:
       print("a_lock is locked while this executes")
