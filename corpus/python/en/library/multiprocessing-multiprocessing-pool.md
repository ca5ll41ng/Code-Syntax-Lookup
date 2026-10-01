---
id: "python-en-function-multiprocessing-pool"
language: "python"
lang: "en"
category: "function"
name: "Pool"
signature: "Pool([processes[, initializer[, initargs[, maxtasksperchild [, context]]]]])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Pool"
license: "PSF"
updated: "2026-10-01"
---

# Pool

A process pool object which controls a pool of worker processes to which jobs
can be submitted.  It supports asynchronous results with timeouts and
callbacks and has a parallel map implementation.

*processes* is the number of worker processes to use.  If *processes* is
`None` then the number returned by `os.process_cpu_count` is used.

If *initializer* is not `None` then each worker process will call
`initializer(*initargs)` when it starts.

*maxtasksperchild* is the number of tasks a worker process can complete
before it will exit and be replaced with a fresh worker process, to enable
unused resources to be freed. The default *maxtasksperchild* is `None`, which
means worker processes will live as long as the pool.

*context* can be used to specify the context used for starting
the worker processes.  Usually a pool is created using the
function `multiprocessing.Pool` or the `Pool` method
of a context object.  In both cases *context* is set
appropriately. If `None`, calling this function will have the side effect
of setting the current global start method if it has not been set already.
See the `get_context` function.

Note that the methods of the pool object should only be called by
the process which created the pool.

> **Warning**
>
> `multiprocessing.pool` objects have internal resources that need to be
> properly managed (like any other resource) by using the pool as a context manager
> or by calling `close` and `terminate` manually. Failure to do this
> can lead to the process hanging on finalization.
>
> Note that it is **not correct** to rely on the garbage collector to destroy the pool
> as CPython does not assure that the finalizer of the pool will be called
> (see `object.__del__` for more information).
>

> *Changed in 3.2*: Added the *maxtasksperchild* parameter.

> *Changed in 3.4*: Added the *context* parameter.

> *Changed in 3.13*: *processes* uses :func:`os.process_cpu_count` by default, instead of :func:`os.cpu_count`.

> **Note**
>
> Worker processes within a `Pool` typically live for the complete
> duration of the Pool's work queue. A frequent pattern found in other
> systems (such as Apache, mod_wsgi, etc) to free resources held by
> workers is to allow a worker within a pool to complete only a set
> amount of work before exiting, being cleaned up and a new
> process spawned to replace the old one. The *maxtasksperchild*
> argument to the `Pool` exposes this ability to the end user.
>

method:: apply(func[, args[, kwds]])

method:: apply_async(func[, args[, kwds[, callback[, error_callback]]]])

method:: map(func, iterable[, chunksize])

method:: map_async(func, iterable[, chunksize[, callback[, error_callback]]])

method:: imap(func, iterable, chunksize=1, *, buffersize=None)

method:: imap_unordered(func, iterable, chunksize=1, *, buffersize=None)

method:: starmap(func, iterable[, chunksize])

method:: starmap_async(func, iterable[, chunksize[, callback[, error_callback]]])

method:: close()

method:: terminate()

method:: join()

> *Changed in 3.3*: Pool objects now support the context management protocol -- see :ref:`typecontextmanager`.  :meth:`~contextmanager.__enter__` returns the pool object, and :meth:`~contextmanager.__exit__` calls :meth:`terminate`.
