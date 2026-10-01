---
id: "python-zh-function-os-timerfd_gettime"
language: "python"
lang: "zh"
category: "function"
name: "timerfd_gettime"
signature: "timerfd_gettime(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.timerfd_gettime"
license: "PSF"
updated: "2026-10-01"
---

# timerfd_gettime

返回一个浮点数形式的二元组 (``next_expiration``, ``interval``)。

`next_expiration` denotes the relative time until the timer next fires,
regardless of if the `TFD_TIMER_ABSTIME` flag is set.

`interval` denotes the timer's interval.
If zero, the timer will only fire once, after `next_expiration` seconds
have elapsed.

> **Seealso**
>
>

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
