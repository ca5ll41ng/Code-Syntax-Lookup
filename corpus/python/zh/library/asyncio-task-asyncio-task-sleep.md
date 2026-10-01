---
id: "python-zh-function-asyncio-task-sleep"
language: "python"
lang: "zh"
category: "function"
name: "sleep"
signature: "sleep(delay, result=None)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.sleep"
license: "PSF"
updated: "2026-10-01"
---

# sleep

阻塞 *delay* 指定的秒数。

If *result* is provided, it is returned to the caller
when the coroutine completes.

`sleep()` always suspends the current task, allowing other tasks
to run.

Setting the delay to 0 provides an optimized path to allow other
tasks to run. This can be used by long-running functions to avoid
blocking the event loop for the full duration of the function call.

.. _asyncio_example_sleep:

Example of coroutine displaying the current date every second
for 5 seconds::

 import asyncio
 import datetime as dt

 async def display_date():
     loop = asyncio.get_running_loop()
     end_time = loop.time() + 5.0
     while True:
         print(dt.datetime.now())
         if (loop.time() + 1.0) >= end_time:
             break
         await asyncio.sleep(1)

 asyncio.run(display_date())

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.13*: Raises :exc:`ValueError` if *delay* is :data:`~math.nan`.
