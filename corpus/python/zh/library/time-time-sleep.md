---
id: "python-zh-function-time-sleep"
language: "python"
lang: "zh"
category: "function"
name: "sleep"
signature: "sleep(seconds, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/zh-cn/3/library/time.html#time.sleep"
license: "PSF"
updated: "2026-10-01"
---

# sleep

Suspend execution of the calling thread for the given number of seconds.
The argument may be a non-integer to indicate a more precise sleep time.

If the sleep is interrupted by a signal and no exception is raised by the
signal handler, the sleep is restarted with a recomputed timeout.

The suspension time may be longer than requested by an arbitrary amount,
because of the scheduling of other activity in the system.

#### Windows implementation

On Windows, if *seconds* is zero,
the thread relinquishes the remainder of its time slice
to any other thread that is ready to run.
If there are no other threads ready to run,
the function returns immediately, and the thread continues execution.
On Windows 10 and newer the implementation uses
a `high-resolution timer
<https://learn.microsoft.com/windows/win32/api/synchapi/nf-synchapi-createwaitabletimerexw>`_
which provides resolution of 100 nanoseconds.
If *seconds* is zero, `Sleep(0)` is used.

#### Unix implementation

* Use `clock_nanosleep()` if available (resolution: 1 nanosecond);
* Or use `nanosleep()` if available (resolution: 1 nanosecond);
* Or use `select()` (resolution: 1 microsecond).

> **Note**
>
> 要模拟“无操作”，请使用 :keyword:`pass` 而非 ``time.sleep(0)``。
>
> To voluntarily relinquish the CPU, specify a real-time `scheduling
> policy` and use `os.sched_yield` instead.
>

audit-event:: time.sleep seconds

> *Changed in 3.5*: The function now sleeps at least *seconds* even if the sleep is interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale).

> *Changed in 3.11*: On Unix, the ``clock_nanosleep()`` and ``nanosleep()`` functions are now used if available. On Windows, a waitable timer is now used.

> *Changed in 3.13*: Raises an auditing event.

> *Changed in 3.15*: Accepts any real number, not only integer or float.
