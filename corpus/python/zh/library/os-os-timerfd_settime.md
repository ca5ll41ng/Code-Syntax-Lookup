---
id: "python-zh-function-os-timerfd_settime"
language: "python"
lang: "zh"
category: "function"
name: "timerfd_settime"
signature: "timerfd_settime(fd, /, *, flags=0, initial=0.0, interval=0.0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.timerfd_settime"
license: "PSF"
updated: "2026-10-01"
---

# timerfd_settime

Alter a timer file descriptor's internal timer.
This function operates the same interval timer as `timerfd_settime_ns`.

*fd* 必须是一个有效的计时器文件描述符。

The timer's behaviour can be modified by specifying a *flags* value.
Any of the following variables may be used, combined using bitwise OR
(the `|` operator):

- `TFD_TIMER_ABSTIME`
- `TFD_TIMER_CANCEL_ON_SET`

The timer is disabled by setting *initial* to zero (`0`).
If *initial* is greater than zero, the timer is enabled.
If *initial* is less than zero, it raises an `OSError` exception
with `errno` set to `errno.EINVAL`.

By default the timer will fire when *initial* seconds have elapsed.

However, if the `TFD_TIMER_ABSTIME` flag is set,
the timer will fire when the timer's clock
(set by *clockid* in `timerfd_create`) reaches *initial* seconds.

The timer's interval is set by the *interval* real number.
If *interval* is zero, the timer only fires once, on the initial expiration.
If *interval* is greater than zero, the timer fires every time *interval*
seconds have elapsed since the previous expiration.
If *interval* is less than zero, it raises `OSError` with `errno`
set to `errno.EINVAL`.

If the `TFD_TIMER_CANCEL_ON_SET` flag is set along with
`TFD_TIMER_ABSTIME` and the clock for this timer is
`time.CLOCK_REALTIME`, the timer is marked as cancelable if the
real-time clock is changed discontinuously. Reading the descriptor is
aborted with the error `errno.ECANCELED`.

Linux manages system clock as UTC. A daylight-savings time transition is
done by changing time offset only and doesn't cause discontinuous system
clock change.

下列事件会导致不连续的系统时钟变化：

- `settimeofday`
- `clock_settime`
- set the system date and time by `date` command

Return a two-item tuple of (`next_expiration`, `interval`) from
the previous timer state, before this function executed.

> **Seealso**
>
> `timerfd_create(2)`, `timerfd_settime(2)`,
> `settimeofday(2)`, `clock_settime(2)`,
> and `date(1)`.
>

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
