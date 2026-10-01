---
id: "python-zh-function-asyncio-eventloop-loop-call_exception_handler"
language: "python"
lang: "zh"
category: "function"
name: "loop.call_exception_handler"
signature: "loop.call_exception_handler(context)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.call_exception_handler"
license: "PSF"
updated: "2026-10-01"
---

# loop.call_exception_handler

调用当前事件循环的异常处理器。

*context* is a `dict` object containing the following keys
(new keys may be introduced in future Python versions):

* 'message': Error message;
* 'exception' (optional): Exception object;
* 'future' (optional): `asyncio.Future` instance;
* 'task' (optional): `asyncio.Task` instance;
* 'handle' (optional): `asyncio.Handle` instance;
* 'protocol' (optional): `Protocol` instance;
* 'transport' (optional): `Transport` instance;
* 'socket' (optional): `socket.socket` instance;
* 'source_traceback' (optional): Traceback of the source;
* 'handle_traceback' (optional): Traceback of the handle;
* 'asyncgen' (optional): Asynchronous generator that caused
                         the exception.

> **Note**
>
> This method should not be overloaded in subclassed
> event loops.  For custom exception handling, use
> the `set_exception_handler` method.
>
