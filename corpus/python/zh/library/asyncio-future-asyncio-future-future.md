---
id: "python-zh-function-asyncio-future-future"
language: "python"
lang: "zh"
category: "function"
name: "Future"
signature: "Future(*, loop=None)"
directive: "class"
module: "asyncio-future"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-future.html#asyncio-future.Future"
license: "PSF"
updated: "2026-10-01"
---

# Future

A Future represents an eventual result of an asynchronous
operation.  Not thread-safe.

Future is an `awaitable` object.  Coroutines can await on
Future objects until they either have a result or an exception
set, or until they are cancelled. A Future can be awaited multiple
times and the result is same.

Typically Futures are used to enable low-level
callback-based code (e.g. in protocols implemented using asyncio
`transports`)
to interoperate with high-level async/await code.

The rule of thumb is to never expose Future objects in user-facing
APIs, and the recommended way to create a Future object is to call
`loop.create_future`.  This way alternative event loop
implementations can inject their own optimized implementations
of a Future object.

Future 是对应其结果类型的 :ref:`泛型 <generics>` 对象。

> *Changed in 3.7*: Added support for the :mod:`contextvars` module.

> *Deprecated since 3.10*: Deprecation warning is emitted if *loop* is not specified and there is no running event loop.

method:: result()

method:: set_result(result)

method:: set_exception(exception)

method:: done()

method:: cancelled()

method:: add_done_callback(callback, *, context=None)

method:: remove_done_callback(callback)

method:: cancel(msg=None)

method:: exception()

method:: get_loop()
