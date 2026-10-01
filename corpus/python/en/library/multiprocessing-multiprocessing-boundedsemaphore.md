---
id: "python-en-function-multiprocessing-boundedsemaphore"
language: "python"
lang: "en"
category: "function"
name: "BoundedSemaphore"
signature: "BoundedSemaphore([value])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.BoundedSemaphore"
license: "PSF"
updated: "2026-10-01"
---

# BoundedSemaphore

A bounded semaphore object: a close analog of
`threading.BoundedSemaphore`.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

A solitary difference from its close analog exists: its `acquire` method's
first argument is named *block*, as is consistent with `Lock.acquire`.

method:: locked()

> **Note**
>
> On macOS, this is indistinguishable from `Semaphore` because
> `sem_getvalue()` is not implemented on that platform.
>
