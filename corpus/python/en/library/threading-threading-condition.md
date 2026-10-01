---
id: "python-en-function-threading-condition"
language: "python"
lang: "en"
category: "function"
name: "Condition"
signature: "Condition(lock=None)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Condition"
license: "PSF"
updated: "2026-10-01"
---

# Condition

This class implements condition variable objects.  A condition variable
allows one or more threads to wait until they are notified by another thread.

If the *lock* argument is given and not `None`, it must be a `Lock`
or `RLock` object, and it is used as the underlying lock.  Otherwise,
a new `RLock` object is created and used as the underlying lock.

> *Changed in 3.3*: changed from a factory function to a class.

method:: acquire(*args)

method:: release()

method:: locked()

method:: wait(timeout=None)

method:: wait_for(predicate, timeout=None)

method:: notify(n=1)

method:: notify_all()
