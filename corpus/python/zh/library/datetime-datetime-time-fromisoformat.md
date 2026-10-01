---
id: "python-zh-function-datetime-time-fromisoformat"
language: "python"
lang: "zh"
category: "function"
name: "time.fromisoformat"
signature: "time.fromisoformat(time_string)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.time.fromisoformat"
license: "PSF"
updated: "2026-10-01"
---

# time.fromisoformat

Return a `.time` corresponding to a *time_string* in any valid
ISO 8601 format, with the following exceptions:

1. Time zone offsets may have fractional seconds.
2. The leading `T`, normally required in cases where there may be ambiguity between
   a date and a time, is not required.
3. Fractional seconds may have any number of digits (anything beyond 6 will
   be truncated).
4. Fractional hours and minutes are not supported.

示例：

```python

>>> import datetime as dt
>>> dt.time.fromisoformat('04:23:01')
datetime.time(4, 23, 1)
>>> dt.time.fromisoformat('T04:23:01')
datetime.time(4, 23, 1)
>>> dt.time.fromisoformat('T042301')
datetime.time(4, 23, 1)
>>> dt.time.fromisoformat('04:23:01.000384')
datetime.time(4, 23, 1, 384)
>>> dt.time.fromisoformat('04:23:01,000384')
datetime.time(4, 23, 1, 384)
>>> dt.time.fromisoformat('04:23:01+04:00')
datetime.time(4, 23, 1, tzinfo=datetime.timezone(datetime.timedelta(seconds=14400)))
>>> dt.time.fromisoformat('04:23:01Z')
datetime.time(4, 23, 1, tzinfo=datetime.timezone.utc)
>>> dt.time.fromisoformat('04:23:01+00:00')
datetime.time(4, 23, 1, tzinfo=datetime.timezone.utc)
```

> *Added in 3.7*

> *Changed in 3.11*: Previously, this method only supported formats that could be emitted by :meth:`time.isoformat`.
