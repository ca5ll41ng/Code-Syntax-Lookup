---
id: "python-zh-function-multiprocessing-semaphore"
language: "python"
lang: "zh"
category: "function"
name: "Semaphore"
signature: "Semaphore([value])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.Semaphore"
license: "PSF"
updated: "2026-10-01"
---

# Semaphore

一种信号量对象:  类似于  :class:`threading.Semaphore`.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

A solitary difference from its close analog exists: its `acquire` method's
first argument is named *block*, as is consistent with `Lock.acquire`.

method:: get_value()

method:: locked()
