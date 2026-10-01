---
id: "python-en-function-multiprocessing-wait"
language: "python"
lang: "en"
category: "function"
name: "wait"
signature: "wait(object_list, timeout=None)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.wait"
license: "PSF"
updated: "2026-10-01"
---

# wait

Wait till an object in *object_list* is ready.  Returns the list of
those objects in *object_list* which are ready.  If *timeout* is a
float then the call blocks for at most that many seconds.  If
*timeout* is `None` then it will block for an unlimited period.
A negative timeout is equivalent to a zero timeout.

For both POSIX and Windows, an object can appear in *object_list* if
it is

* a readable `~multiprocessing.connection.Connection` object;
* a connected and readable `socket.socket` object; or
* the `~multiprocessing.Process.sentinel` attribute of a
  `~multiprocessing.Process` object.

A connection or socket object is ready when there is data available
to be read from it, or the other end has been closed.

**POSIX**: `wait(object_list, timeout)` almost equivalent
`select.select(object_list, [], [], timeout)`.  The difference is
that, if `select.select` is interrupted by a signal, it can
raise `OSError` with an error number of `EINTR`, whereas
`wait` will not.

**Windows**: An item in *object_list* must either be an integer
handle which is waitable (according to the definition used by the
documentation of the Win32 function `WaitForMultipleObjects()`)
or it can be an object with a `~io.IOBase.fileno` method which returns a
socket handle or pipe handle.  (Note that pipe handles and socket
handles are **not** waitable handles.)

> *Added in 3.3*
