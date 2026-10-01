---
id: "python-en-function-time-clock_gettime-clk_id-float"
language: "python"
lang: "en"
category: "function"
name: "clock_gettime(clk_id, /) -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.clock_gettime(clk_id, /) -> float"
license: "PSF"
updated: "2026-10-01"
---

# clock_gettime(clk_id, /) -> float

Return the time of the specified clock *clk_id*.  Refer to
`time-clock-id-constants` for a list of accepted values for *clk_id*.

Use `clock_gettime_ns` to avoid the precision loss caused by the
`float` type.

availability:: Unix.

> *Added in 3.3*
