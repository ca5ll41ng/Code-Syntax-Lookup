---
id: "python-en-function-threading-semaphore"
language: "python"
lang: "en"
category: "function"
name: "Semaphore"
signature: "Semaphore(value=1)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Semaphore"
license: "PSF"
updated: "2026-10-01"
---

# Semaphore

This class implements semaphore objects.  A semaphore manages an atomic
counter representing the number of `release` calls minus the number of
`acquire` calls, plus an initial value.  The `acquire` method
blocks if necessary until it can return without making the counter negative.
If not given, *value* defaults to 1.

The optional argument gives the initial *value* for the internal counter; it
defaults to `1`. If the *value* given is less than 0, `ValueError` is
raised.

> *Changed in 3.3*: changed from a factory function to a class.

method:: acquire(blocking=True, timeout=None)

method:: release(n=1)
