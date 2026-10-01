---
id: "python-en-function-threading-excepthook"
language: "python"
lang: "en"
category: "function"
name: "excepthook"
signature: "excepthook(args, /)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.excepthook"
license: "PSF"
updated: "2026-10-01"
---

# excepthook

Handle uncaught exception raised by `Thread.run`.

The *args* argument has the following attributes:

* *exc_type*: Exception type.
* *exc_value*: Exception value, can be `None`.
* *exc_traceback*: Exception traceback, can be `None`.
* *thread*: Thread which raised the exception, can be `None`.

If *exc_type* is `SystemExit`, the exception is silently ignored.
Otherwise, the exception is printed out on `sys.stderr`.

If  this function raises an exception, `sys.excepthook` is called to
handle it.

`threading.excepthook` can be overridden to control how uncaught
exceptions raised by `Thread.run` are handled.

Storing *exc_value* using a custom hook can create a reference cycle. It
should be cleared explicitly to break the reference cycle when the
exception is no longer needed.

Storing *thread* using a custom hook can resurrect it if it is set to an
object which is being finalized. Avoid storing *thread* after the custom
hook completes to avoid resurrecting objects.

> **Seealso**
>
> `sys.excepthook` handles uncaught exceptions.
>

> *Added in 3.8*
