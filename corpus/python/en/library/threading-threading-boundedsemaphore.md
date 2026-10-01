---
id: "python-en-function-threading-boundedsemaphore"
language: "python"
lang: "en"
category: "function"
name: "BoundedSemaphore"
signature: "BoundedSemaphore(value=1)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.BoundedSemaphore"
license: "PSF"
updated: "2026-10-01"
---

# BoundedSemaphore

Class implementing bounded semaphore objects.  A bounded semaphore checks to
make sure its current value doesn't exceed its initial value.  If it does,
`ValueError` is raised. In most situations semaphores are used to guard
resources with limited capacity.  If the semaphore is released too many times
it's a sign of a bug.  If not given, *value* defaults to 1.

> *Changed in 3.3*: changed from a factory function to a class.
