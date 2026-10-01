---
id: "python-zh-function-test-sleeping_retry"
language: "python"
lang: "zh"
category: "function"
name: "sleeping_retry"
signature: "sleeping_retry(timeout, err_msg=None, /, *, init_delay=0.010, max_delay=1.0, error=True)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.sleeping_retry"
license: "PSF"
updated: "2026-10-01"
---

# sleeping_retry

应用指数回退的等待策略。

Run the loop body until `break` stops the loop. Sleep at each loop
iteration, but not at the first iteration. The sleep delay is doubled at
each iteration (up to *max_delay* seconds).

请参阅 :func:`busy_retry` 文档了解相关形参的用法。

在 SHORT_TIMEOUT 秒后引发异常的示例::

    for _ in support.sleeping_retry(support.SHORT_TIMEOUT):
        if check():
            break

error=False 的用法示例::

    for _ in support.sleeping_retry(support.SHORT_TIMEOUT, error=False):
        if check():
            break
    else:
        raise RuntimeError('my custom error')
