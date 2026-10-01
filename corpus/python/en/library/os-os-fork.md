---
id: "python-en-function-os-fork"
language: "python"
lang: "en"
category: "function"
name: "fork"
signature: "fork()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fork"
license: "PSF"
updated: "2026-10-01"
---

# fork

Fork a child process.  Return `0` in the child and the child's process id in the
parent.  If an error occurs `OSError` is raised.

Note that some platforms including FreeBSD <= 6.3 and Cygwin have
known issues when using `fork()` from a thread.

audit-event:: os.fork "" os.fork

> **Warning**
>
> If you use TLS sockets in an application calling `fork()`, see
> the warning in the `ssl` documentation.
>

> **Warning**
>
> On macOS the use of this function is unsafe when mixed with using
> higher-level system APIs, and that includes using `urllib.request`.
>

> *Changed in 3.8*: Calling ``fork()`` in a subinterpreter is no longer supported (:exc:`RuntimeError` is raised).

> *Changed in 3.12*: If Python is able to detect that your process has multiple threads, :func:`os.fork` now raises a :exc:`DeprecationWarning`.  We chose to surface this as a warning, when detectable, to better inform developers of a design problem that the POSIX platform specifically notes as not supported. Even in code that *appears* to work, it has never been safe to mix threading with :func:`os.fork` on POSIX platforms. The CPython runtime itself has always made API calls that are not safe for use in the child process when threads existed in the parent (such as ``malloc`` and ``free``).  Users of macOS or users of libc or malloc implementations other than those typically found in glibc to date are among those already more likely to experience deadlocks running such code.  See `this discussion on fork being incompatible with threads <https://discuss.python.org/t/33555>`_ for technical details of why we're surfacing this longstanding platform compatibility problem to developers.

availability:: POSIX, not WASI, not Android, not iOS.
