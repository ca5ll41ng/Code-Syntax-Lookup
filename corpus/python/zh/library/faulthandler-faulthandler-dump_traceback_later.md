---
id: "python-zh-function-faulthandler-dump_traceback_later"
language: "python"
lang: "zh"
category: "function"
name: "dump_traceback_later"
signature: "dump_traceback_later(timeout, repeat=False, file=sys.stderr, exit=False, *, max_threads=100)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/zh-cn/3/library/faulthandler.html#faulthandler.dump_traceback_later"
license: "PSF"
updated: "2026-10-01"
---

# dump_traceback_later

Dump the tracebacks of all threads, after a timeout of *timeout* seconds, or
every *timeout* seconds if *repeat* is `True`.  If *exit* is `True`, call
:c`_exit` with status=1 after dumping the tracebacks.  (Note
:c`_exit` exits the process immediately, which means it doesn't do any
cleanup like flushing file buffers.) If the function is called twice, the new
call replaces previous parameters and resets the timeout. The timer has a
sub-second resolution. *max_threads* caps the number of threads dumped.

The *file* must be kept open until the traceback is dumped or
`cancel_dump_traceback_later` is called: see `issue with file
descriptors`.

本函数用一个看门狗线程实现。

> *Changed in 3.5*: Added support for passing file descriptor to this function.

> *Changed in 3.7*: This function is now always available.

> *Changed in 3.15*: Added the *max_threads* keyword argument.
