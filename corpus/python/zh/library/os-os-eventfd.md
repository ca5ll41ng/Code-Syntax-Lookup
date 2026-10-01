---
id: "python-zh-function-os-eventfd"
language: "python"
lang: "zh"
category: "function"
name: "eventfd"
signature: "eventfd(initval[, flags=os.EFD_CLOEXEC])"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.eventfd"
license: "PSF"
updated: "2026-10-01"
---

# eventfd

Create and return an event file descriptor. The file descriptors supports
raw `read` and `write` with a buffer size of 8,
`~select.select`, `~select.poll` and similar. See man page
`eventfd(2)` for more information.  By default, the
new file descriptor is `non-inheritable`.

*initval* is the initial value of the event counter. The initial value
must be a 32 bit unsigned integer. Please note that the initial value is
limited to a 32 bit unsigned int although the event counter is an unsigned
64 bit integer with a maximum value of 2\ `64`\ -\ 2.

*flags* can be constructed from `EFD_CLOEXEC`,
`EFD_NONBLOCK`, and `EFD_SEMAPHORE`.

If `EFD_SEMAPHORE` is specified and the event counter is non-zero,
`eventfd_read` returns 1 and decrements the counter by one.

If `EFD_SEMAPHORE` is not specified and the event counter is
non-zero, `eventfd_read` returns the current event counter value and
resets the counter to zero.

If the event counter is zero and `EFD_NONBLOCK` is not
specified, `eventfd_read` blocks.

`eventfd_write` increments the event counter. Write blocks if the
write operation would increment the counter to a value larger than
2\ `64`\ -\ 2.

示例::

    import os

    # semaphore with start value '1'
    fd = os.eventfd(1, os.EFD_SEMAPHORE | os.EFD_CLOEXEC)
    try:
        # acquire semaphore
        v = os.eventfd_read(fd)
        try:
            do_work()
        finally:
            # release semaphore
            os.eventfd_write(fd, v)
    finally:
        os.close(fd)

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.10*
