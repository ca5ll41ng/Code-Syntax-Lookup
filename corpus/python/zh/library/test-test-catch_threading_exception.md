---
id: "python-zh-function-test-catch_threading_exception"
language: "python"
lang: "zh"
category: "function"
name: "catch_threading_exception"
signature: "catch_threading_exception()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.catch_threading_exception"
license: "PSF"
updated: "2026-10-01"
---

# catch_threading_exception

Context manager catching `threading.Thread` exception using
`threading.excepthook`.

当异常被捕获时要设置的属性：

* `exc_type`
* `exc_value`
* `exc_traceback`
* `thread`

参见 :func:`threading.excepthook` 文档。

这些属性在上下文管理器退出时将被删除。

用法：

    with threading_helper.catch_threading_exception() as cm:
        # code spawning a thread which raises an exception
        ...

        # check the thread exception, use cm attributes:
        # exc_type, exc_value, exc_traceback, thread
        ...

    # exc_type, exc_value, exc_traceback, thread attributes of cm no longer
    # exists at this point
    # (to avoid reference cycles)

> *Added in 3.8*
