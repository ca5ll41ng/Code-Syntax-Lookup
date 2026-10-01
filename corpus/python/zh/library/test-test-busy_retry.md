---
id: "python-zh-function-test-busy_retry"
language: "python"
lang: "zh"
category: "function"
name: "busy_retry"
signature: "busy_retry(timeout, err_msg=None, /, *, error=True)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.busy_retry"
license: "PSF"
updated: "2026-10-01"
---

# busy_retry

运行循环体直到以 ``break`` 停止循环。

After *timeout* seconds, raise an `AssertionError` if *error* is true,
or just stop the loop if *error* is false.

示例::

    for _ in support.busy_retry(support.SHORT_TIMEOUT):
        if check():
            break

error=False 的用法示例::

    for _ in support.busy_retry(support.SHORT_TIMEOUT, error=False):
        if check():
            break
    else:
        raise RuntimeError('my custom error')
