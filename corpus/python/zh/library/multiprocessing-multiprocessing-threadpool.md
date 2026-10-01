---
id: "python-zh-function-multiprocessing-threadpool"
language: "python"
lang: "zh"
category: "function"
name: "ThreadPool"
signature: "ThreadPool([processes[, initializer[, initargs]]])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.ThreadPool"
license: "PSF"
updated: "2026-10-01"
---

# ThreadPool

A thread pool object which controls a pool of worker threads to which jobs
can be submitted.  `ThreadPool` instances are fully interface
compatible with `Pool` instances, and their resources must also be
properly managed, either by using the pool as a context manager or by
calling `~multiprocessing.pool.Pool.close` and
`~multiprocessing.pool.Pool.terminate` manually.

*processes* is the number of worker threads to use.  If *processes* is
`None` then the number returned by `os.process_cpu_count` is used.

If *initializer* is not `None` then each worker process will call
`initializer(*initargs)` when it starts.

不同于 :class:`Pool`，*maxtasksperchild* 和 *context* 不可被提供。

> **Note**
>
> A `ThreadPool` shares the same interface as `Pool`, which
> is designed around a pool of processes and predates the introduction of
> the `concurrent.futures` module.  As such, it inherits some
> operations that don't make sense for a pool backed by threads, and it
> has its own type for representing the status of asynchronous jobs,
> `AsyncResult`, that is not understood by any other libraries.
>
> Users should generally prefer to use
> `concurrent.futures.ThreadPoolExecutor`, which has a simpler
> interface that was designed around threads from the start, and which
> returns `concurrent.futures.Future` instances that are
> compatible with many other libraries, including `asyncio`.
>
