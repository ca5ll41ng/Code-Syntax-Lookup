---
id: "python-en-function-faulthandler-enable"
language: "python"
lang: "en"
category: "function"
name: "enable"
signature: "enable(file=sys.stderr, all_threads=True, c_stack=True, *, max_threads=100)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/3/library/faulthandler.html#faulthandler.enable"
license: "PSF"
updated: "2026-10-01"
---

# enable

Enable the fault handler: install handlers for the `~signal.SIGSEGV`,
`~signal.SIGFPE`, `~signal.SIGABRT`, `~signal.SIGBUS`
and `~signal.SIGILL`
signals to dump the Python traceback. If *all_threads* is `True`,
produce tracebacks for every running thread. Otherwise, dump only the current
thread.

The *file* must be kept open until the fault handler is disabled: see
`issue with file descriptors`.

If *c_stack* is `True`, then the C stack trace is printed after the Python
traceback, unless the system does not support it. See `dump_c_stack` for
more information on compatibility.

*max_threads* caps the number of threads dumped when a fatal signal fires.

> *Changed in 3.5*: Added support for passing file descriptor to this function.

> *Changed in 3.6*: On Windows, a handler for Windows exception is also installed.

> *Changed in 3.10*: The dump now mentions if a garbage collector collection is running if *all_threads* is true.

> *Changed in 3.14*: Only the current thread is dumped if the :term:`GIL` is disabled to prevent the risk of data races.

> *Changed in 3.14*: The dump now displays the C stack trace if *c_stack* is true.

> *Changed in 3.15*: Added the *max_threads* keyword argument.
