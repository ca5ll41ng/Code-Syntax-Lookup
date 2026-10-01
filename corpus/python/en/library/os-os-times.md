---
id: "python-en-function-os-times"
language: "python"
lang: "en"
category: "function"
name: "times"
signature: "times()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.times"
license: "PSF"
updated: "2026-10-01"
---

# times

Returns the current global process times.
The return value is an object with five attributes:

* `user` - user time
* `system` - system time
* `children_user` - user time of all child processes
* `children_system` - system time of all child processes
* `elapsed` - elapsed real time since a fixed point in the past

For backwards compatibility, this object also behaves like a five-tuple
containing `user`, `system`, `children_user`,
`children_system`, and `elapsed` in that order.

See the Unix manual page
`times(2)` and [times(3)](https://man.freebsd.org/cgi/man.cgi?time(3)) manual page on Unix or `the GetProcessTimes MSDN
<https://docs.microsoft.com/windows/win32/api/processthreadsapi/nf-processthreadsapi-getprocesstimes>`_
on Windows. On Windows, only `user` and `system` are known; the other attributes are zero.

availability:: Unix, Windows.

> *Changed in 3.3*: Return type changed from a tuple to a tuple-like object with named attributes.
