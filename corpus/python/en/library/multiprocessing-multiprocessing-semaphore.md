---
id: "python-en-function-multiprocessing-semaphore"
language: "python"
lang: "en"
category: "function"
name: "Semaphore"
signature: "Semaphore([value])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Semaphore"
license: "PSF"
updated: "2026-10-01"
---

# Semaphore

A semaphore object: a close analog of `threading.Semaphore`.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

A solitary difference from its close analog exists: its `acquire` method's
first argument is named *block*, as is consistent with `Lock.acquire`.

method:: get_value()

method:: locked()
