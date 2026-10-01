---
id: "python-zh-function-inspect-getasyncgenstate"
language: "python"
lang: "zh"
category: "function"
name: "getasyncgenstate"
signature: "getasyncgenstate(agen)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.getasyncgenstate"
license: "PSF"
updated: "2026-10-01"
---

# getasyncgenstate

Get current state of an asynchronous generator object.  The function is
intended to be used with asynchronous iterator objects created by
`async def` functions which use the `yield` statement,
but will accept any asynchronous generator-like object that has
`ag_running` and `ag_frame` attributes.

可能的状态是：

* AGEN_CREATED: Waiting to start execution.
* AGEN_RUNNING: Currently being executed by the interpreter.
* AGEN_SUSPENDED: Currently suspended at a yield expression.
* AGEN_CLOSED: Execution has completed.

> *Added in 3.12*
