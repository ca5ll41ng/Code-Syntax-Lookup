---
id: "python-en-function-concurrent-futures-threadpoolexecutor"
language: "python"
lang: "en"
category: "function"
name: "ThreadPoolExecutor"
signature: "ThreadPoolExecutor(max_workers=None, thread_name_prefix='', initializer=None, initargs=())"
directive: "class"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor"
license: "PSF"
updated: "2026-10-01"
---

# ThreadPoolExecutor

An `Executor` subclass that uses a pool of at most *max_workers*
threads to execute calls asynchronously.

All threads enqueued to `ThreadPoolExecutor` will be joined before the
interpreter can exit. Note that the exit handler which does this is
executed *before* any exit handlers added using `atexit`. This means
exceptions in the main thread must be caught and handled in order to
signal threads to exit gracefully. For this reason, it is recommended
that `ThreadPoolExecutor` not be used for long-running tasks.

*initializer* is an optional callable that is called at the start of
each worker thread; *initargs* is a tuple of arguments passed to the
initializer.  Should *initializer* raise an exception, all currently
pending jobs will raise a `~concurrent.futures.thread.BrokenThreadPool`,
as well as any attempt to submit more jobs to the pool.

> *Changed in 3.5*: If *max_workers* is ``None`` or not given, it will default to the number of processors on the machine, multiplied by ``5``, assuming that :class:`ThreadPoolExecutor` is often used to overlap I/O instead of CPU work and the number of workers should be higher than the number of workers for :class:`ProcessPoolExecutor`.

> *Changed in 3.6*: Added the *thread_name_prefix* parameter to allow users to control the :class:`threading.Thread` names for worker threads created by the pool for easier debugging.

> *Changed in 3.7*: Added the *initializer* and *initargs* arguments.

> *Changed in 3.8*: Default value of *max_workers* is changed to ``min(32, os.cpu_count() + 4)``. This default value preserves at least 5 workers for I/O bound tasks. It utilizes at most 32 CPU cores for CPU bound tasks which release the GIL. And it avoids using very large resources implicitly on many-core machines.  ThreadPoolExecutor now reuses idle worker threads before starting *max_workers* worker threads too.

> *Changed in 3.13*: Default value of *max_workers* is changed to ``min(32, (os.process_cpu_count() or 1) + 4)``.
