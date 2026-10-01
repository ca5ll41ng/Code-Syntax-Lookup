---
id: "python-zh-function-asyncio-eventloop-get_event_loop"
language: "python"
lang: "zh"
category: "function"
name: "get_event_loop"
signature: "get_event_loop()"
directive: "function"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.get_event_loop"
license: "PSF"
updated: "2026-10-01"
---

# get_event_loop

获取当前事件循环。

When called from a coroutine or a callback (e.g. scheduled with
call_soon or similar API), this function will always return the
running event loop.

If there is no running event loop set, the function will return
the loop set by `set_event_loop`, or raise a `RuntimeError`
if no loop has been set.

Because this function has rather complex behavior, using the
`get_running_loop` function is preferred to `get_event_loop`
in coroutines and callbacks.

As noted above, consider using the higher-level `asyncio.run` function,
instead of using these lower level functions to manually create and close an
event loop.

> *Changed in 3.14*: Raises a :exc:`RuntimeError` if there is no current event loop.
