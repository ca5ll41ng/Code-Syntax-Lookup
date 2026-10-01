---
id: "python-zh-function-datetime-date-timetuple"
language: "python"
lang: "zh"
category: "function"
name: "date.timetuple"
signature: "date.timetuple()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.date.timetuple"
license: "PSF"
updated: "2026-10-01"
---

# date.timetuple

返回一个 :class:`time.struct_time`，即 :func:`time.localtime` 所返回的类型。

hours, minutes 和 seconds 值均为 0，且 DST 旗标值为 -1。

``d.timetuple()`` 等价于::

  time.struct_time((d.year, d.month, d.day, 0, 0, 0, d.weekday(), yday, -1))

where `yday = d.toordinal() - date(d.year, 1, 1).toordinal() + 1`
is the day number within the current year starting with 1 for January 1st.
