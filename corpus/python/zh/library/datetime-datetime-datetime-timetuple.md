---
id: "python-zh-function-datetime-datetime-timetuple"
language: "python"
lang: "zh"
category: "function"
name: "datetime.timetuple"
signature: "datetime.timetuple()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.timetuple"
license: "PSF"
updated: "2026-10-01"
---

# datetime.timetuple

返回一个 :class:`time.struct_time`，即 :func:`time.localtime` 所返回的类型。

``d.timetuple()`` 等价于::

  time.struct_time((d.year, d.month, d.day,
                    d.hour, d.minute, d.second,
                    d.weekday(), yday, dst))

where `yday = d.toordinal() - date(d.year, 1, 1).toordinal() + 1`
is the day number within the current year starting with 1 for January
1st. The `~time.struct_time.tm_isdst` flag of the result is set according to the
`dst` method: `.tzinfo` is `None` or `dst` returns
`None`, `tm_isdst` is set to `-1`; else if `dst` returns a
non-zero value, `tm_isdst` is set to 1; else `tm_isdst` is
set to 0.
