---
id: "python-en-function-time-clock_settime"
language: "python"
lang: "en"
category: "function"
name: "clock_settime"
signature: "clock_settime(clk_id, time, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.clock_settime"
license: "PSF"
updated: "2026-10-01"
---

# clock_settime

Set the time of the specified clock *clk_id*.  Currently,
`CLOCK_REALTIME` is the only accepted value for *clk_id*.

Use `clock_settime_ns` to avoid the precision loss caused by the
`float` type.

availability:: Unix, not Android, not iOS.

> *Added in 3.3*

> *Changed in 3.15*: Accepts any real number as *time*, not only integer or float.
