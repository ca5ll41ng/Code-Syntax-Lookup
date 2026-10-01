---
id: "python-zh-function-asyncio-eventloop-loop-default_exception_handler"
language: "python"
lang: "zh"
category: "function"
name: "loop.default_exception_handler"
signature: "loop.default_exception_handler(context)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.default_exception_handler"
license: "PSF"
updated: "2026-10-01"
---

# loop.default_exception_handler

默认的异常处理器。

This is called when an exception occurs and no exception
handler is set. This can be called by a custom exception
handler that wants to defer to the default handler behavior.

*context* parameter has the same meaning as in
`call_exception_handler`.
