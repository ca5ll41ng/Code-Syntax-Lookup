---
id: "python-zh-function-asyncio-eventloop-get_running_loop"
language: "python"
lang: "zh"
category: "function"
name: "get_running_loop"
signature: "get_running_loop()"
directive: "function"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.get_running_loop"
license: "PSF"
updated: "2026-10-01"
---

# get_running_loop

返回当前 OS 线程中正在运行的事件循环。

如果没有正在运行的事件循环则会引发 :exc:`RuntimeError`。

此函数只能由协程或回调来调用。

> *Added in 3.7*
