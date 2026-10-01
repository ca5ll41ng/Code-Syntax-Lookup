---
id: "python-en-function-os-timerfd_create"
language: "python"
lang: "en"
category: "function"
name: "timerfd_create"
signature: "timerfd_create(clockid, /, *, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.timerfd_create"
license: "PSF"
updated: "2026-10-01"
---

# timerfd_create

Create and return a timer file descriptor (*timerfd*).

The file descriptor returned by `timerfd_create` supports:

- `read`
- `~select.select`
- `~select.poll`

The file descriptor's `read` method can be called with a buffer size
of 8. If the timer has already expired one or more times, `read`
returns the number of expirations with the host's endianness, which may be
converted to an `int` by `int.from_bytes(x, byteorder=sys.byteorder)`.

`~select.select` and `~select.poll` can be used to wait until
timer expires and the file descriptor is readable.

*clockid* must be a valid `clock ID`,
as defined in the :py`time` module:

- `time.CLOCK_REALTIME`
- `time.CLOCK_MONOTONIC`
- `time.CLOCK_BOOTTIME` (Since Linux 3.15 for timerfd_create)

If *clockid* is `time.CLOCK_REALTIME`, a settable system-wide
real-time clock is used. If the system clock is changed, the timer setting
needs to be updated. To cancel the timer when the system clock is changed, see
`TFD_TIMER_CANCEL_ON_SET`.

If *clockid* is `time.CLOCK_MONOTONIC`, a non-settable monotonically
increasing clock is used. Even if the system clock is changed, the timer
setting will not be affected.

If *clockid* is `time.CLOCK_BOOTTIME`, it is the same as
`time.CLOCK_MONOTONIC` except it includes any time that the system
is suspended.

The file descriptor's behaviour can be modified by specifying a *flags* value.
Any of the following variables may be used, combined using bitwise OR
(the `|` operator):

- `TFD_NONBLOCK`
- `TFD_CLOEXEC`

If `TFD_NONBLOCK` is not set as a flag, `read` blocks until
the timer expires. If it is set as a flag, `read` doesn't block, but
if there hasn't been an expiration since the last call to read,
`read` raises `OSError` with `errno` set to
`errno.EAGAIN`.

`TFD_CLOEXEC` is always set by Python automatically.

The file descriptor must be closed with `os.close` when it is no
longer needed, or else the file descriptor will be leaked.

> **Seealso**
>
>

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
