---
id: "python-zh-function-asyncio-eventloop-loop-create_future"
language: "python"
lang: "zh"
category: "function"
name: "loop.create_future"
signature: "loop.create_future()"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.create_future"
license: "PSF"
updated: "2026-10-01"
---

# loop.create_future

创建一个附加到事件循环中的 :class:`asyncio.Future` 对象。

This is the preferred way to create Futures in asyncio. This lets
third-party event loops provide alternative implementations of
the Future object (with better performance or instrumentation).

> *Added in 3.5.2*
