---
id: "python-zh-function-multiprocessing-daemon-none"
language: "python"
lang: "zh"
category: "function"
name: "*, daemon=None)"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.*, daemon=None)"
license: "PSF"
updated: "2026-10-01"
---

# *, daemon=None)

Process objects represent activity that is run in a separate process. The
`Process` class has equivalents of all the methods of
`threading.Thread`.

The constructor should always be called with keyword arguments. *group*
should always be `None`; it exists solely for compatibility with
`threading.Thread`.  *target* is the callable object to be invoked by
the `run` method.  It defaults to `None`, meaning nothing is
called. *name* is the process name (see `name` for more details).
*args* is the argument tuple for the target invocation.  *kwargs* is a
dictionary of keyword arguments for the target invocation.  If provided,
the keyword-only *daemon* argument sets the process `daemon` flag
to `True` or `False`.  If `None` (the default), this flag will be
inherited from the creating process.

By default, no arguments are passed to *target*. The *args* argument,
which defaults to `()`, can be used to specify a list or tuple of the arguments
to pass to *target*.

If a subclass overrides the constructor, it must make sure it invokes the
base class constructor (`super().__init__()`) before doing anything else
to the process.

> **Note**
>
> In general, all arguments to `Process` must be picklable.  This is
> frequently observed when trying to create a `Process` or use a
> `concurrent.futures.ProcessPoolExecutor` from a REPL with a
> locally defined *target* function.
>
> Passing a callable object defined in the current REPL session causes the
> child process to die via an uncaught `AttributeError` exception when
> starting as *target* must have been defined within an importable module
> in order to be loaded during unpickling.
>
> 以下是子进程中此类不可捕获错误的示例::
>
>    >>> import multiprocessing as mp
>    >>> def knigit():
>    ...     print("Ni!")
>    ...
>    >>> process = mp.Process(target=knigit)
>    >>> process.start()
>    >>> Traceback (most recent call last):
>      File ".../multiprocessing/spawn.py", line ..., in spawn_main
>      File ".../multiprocessing/spawn.py", line ..., in _main
>    AttributeError: module '__main__' has no attribute 'knigit'
>    >>> process
>    <SpawnProcess name='SpawnProcess-1' pid=379473 parent=378707 stopped exitcode=1>
>
> See `multiprocessing-programming-spawn`.  While this restriction is
> not true if using the `"fork"` start method, as of Python `3.14` that
> is no longer the default on any platform.  See
> `multiprocessing-start-methods`.
> See also `132898`.
>

> *Changed in 3.3*: Added the *daemon* parameter.

method:: run()

method:: start()

method:: join([timeout])

attribute:: name

method:: is_alive

attribute:: daemon

In addition to the  `threading.Thread` API, `Process` objects
also support the following attributes and methods:

attribute:: pid

attribute:: exitcode

attribute:: authkey

attribute:: sentinel

method:: interrupt()

method:: terminate()

method:: kill()

method:: close()

Note that the `start`, `join`, `is_alive`,
`terminate` and `exitcode` methods should only be called by
the process that created the process object.

:class:`Process` 一些方法的示例用法：

```python

>>> import multiprocessing, time, signal
>>> mp_context = multiprocessing.get_context('spawn')
>>> p = mp_context.Process(target=time.sleep, args=(1000,))
>>> print(p, p.is_alive())
<...Process ... initial> False
>>> p.start()
>>> print(p, p.is_alive())
<...Process ... started> True
>>> p.terminate()
>>> time.sleep(0.1)
>>> print(p, p.is_alive())
<...Process ... stopped exitcode=-SIGTERM> False
>>> p.exitcode == -signal.SIGTERM
True
```
