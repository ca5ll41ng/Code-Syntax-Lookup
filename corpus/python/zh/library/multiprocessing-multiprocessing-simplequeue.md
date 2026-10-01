---
id: "python-zh-function-multiprocessing-simplequeue"
language: "python"
lang: "zh"
category: "function"
name: "SimpleQueue"
signature: "SimpleQueue()"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.SimpleQueue"
license: "PSF"
updated: "2026-10-01"
---

# SimpleQueue

这是一个简化的 :class:`Queue` 类的实现，很像带锁的 :class:`Pipe` 。

Instantiating this class may set the global start method. See
`global-start-method` for more details.

method:: close()

method:: empty()

method:: get()

method:: put(item)
