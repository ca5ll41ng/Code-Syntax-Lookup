---
id: "python-en-function-select-select"
language: "python"
lang: "en"
category: "function"
name: "select"
signature: "select(rlist, wlist, xlist, timeout=None)"
directive: "function"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.select"
license: "PSF"
updated: "2026-10-01"
---

# select

This is a straightforward interface to the Unix :c`select` system call.
The first three arguments are iterables of 'waitable objects': either
integers representing file descriptors or objects with a parameterless method
named `~io.IOBase.fileno` returning such an integer:

* *rlist*: wait until ready for reading
* *wlist*: wait until ready for writing
* *xlist*: wait for an "exceptional condition" (see the manual page for what
  your system considers such a condition)

Empty iterables are allowed, but acceptance of three empty iterables is
platform-dependent. (It is known to work on Unix but not on Windows.)  The
optional *timeout* argument specifies a time-out in seconds; it may be
a non-integer to specify fractions of seconds.
When the *timeout* argument is omitted or `None`, the function blocks until
at least one file descriptor is ready.  A time-out value of zero specifies a
poll and never blocks.

The return value is a triple of lists of objects that are ready: subsets of the
first three arguments.  When the time-out is reached without a file descriptor
becoming ready, three empty lists are returned.

Among the acceptable object types in the iterables are Python `file
objects` (e.g. `sys.stdin`, or objects returned by
`open` or `os.popen`), socket objects returned by
`socket.socket`.  You may also define a `wrapper` class yourself,
as long as it has an appropriate `~io.IOBase.fileno` method (that
really returns a file descriptor, not just a random integer).

> **Note**
>
> File objects on Windows are not acceptable, but sockets are.  On Windows,
> the underlying :c`select` function is provided by the WinSock
> library, and does not handle file descriptors that don't originate from
> WinSock.
>

> *Changed in 3.5*: The function is now retried with a recomputed timeout when interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale), instead of raising :exc:`InterruptedError`.

> *Changed in 3.15*: Accepts any real number as *timeout*, not only integer or float.
