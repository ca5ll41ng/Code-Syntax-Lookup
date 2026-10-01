---
id: "python-zh-function-_thread-locktype"
language: "python"
lang: "zh"
category: "function"
name: "LockType"
directive: "class"
module: "_thread"
source_url: "https://docs.python.org/zh-cn/3/library/_thread.html#_thread.LockType"
license: "PSF"
updated: "2026-10-01"
---

# LockType

锁对象的类型。

锁对象有以下方法：

method:: acquire(blocking=True, timeout=-1)

method:: release()

method:: locked()

In addition to these methods, lock objects can also be used via the
`with` statement, e.g.::

   import _thread

   a_lock = _thread.allocate_lock()

   with a_lock:
       print("a_lock is locked while this executes")
