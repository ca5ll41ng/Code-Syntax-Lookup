---
id: "python-en-function-multiprocessing-condition"
language: "python"
lang: "en"
category: "function"
name: "Condition"
signature: "Condition([lock])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Condition"
license: "PSF"
updated: "2026-10-01"
---

# Condition

A condition variable: an alias for `threading.Condition`.

If *lock* is specified then it should be a `Lock` or `RLock`
object from `multiprocessing`.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

> *Changed in 3.3*: The :meth:`~threading.Condition.wait_for` method was added.
