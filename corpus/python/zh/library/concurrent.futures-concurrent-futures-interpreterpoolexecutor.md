---
id: "python-zh-function-concurrent-futures-interpreterpoolexecutor"
language: "python"
lang: "zh"
category: "function"
name: "InterpreterPoolExecutor"
signature: "InterpreterPoolExecutor(max_workers=None, thread_name_prefix='', initializer=None, initargs=())"
directive: "class"
module: "concurrent.futures"
source_url: "https://docs.python.org/zh-cn/3/library/concurrent.futures.html#concurrent.futures.InterpreterPoolExecutor"
license: "PSF"
updated: "2026-10-01"
---

# InterpreterPoolExecutor

A `ThreadPoolExecutor` subclass that executes calls asynchronously
using a pool of at most *max_workers* threads.  Each thread runs
tasks in its own interpreter.  The worker interpreters are isolated
from each other, which means each has its own runtime state and that
they can't share any mutable objects or other data.  Each interpreter
has its own `Global Interpreter Lock`,
which means code run with this executor has true multi-core parallelism.

The optional *initializer* and *initargs* arguments have the same
meaning as for `ThreadPoolExecutor`: the initializer is run
when each worker is created, though in this case it is run in
the worker's interpreter.  The executor serializes the *initializer*
and *initargs* using `pickle` when sending them to the worker's
interpreter.

> **Note**
>
> The executor may replace uncaught exceptions from *initializer*
> with `~concurrent.interpreters.ExecutionFailed`.
>

来自 :class:`ThreadPoolExecutor` 的其他警告也适用于此。
