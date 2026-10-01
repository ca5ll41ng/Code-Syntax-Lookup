---
id: "python-zh-function-datetime-date-ctime"
language: "python"
lang: "zh"
category: "function"
name: "date.ctime"
signature: "date.ctime()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.date.ctime"
license: "PSF"
updated: "2026-10-01"
---

# date.ctime

返回一个表示日期的字符串::

    >>> import datetime as dt
    >>> dt.date(2002, 12, 4).ctime()
    'Wed Dec  4 00:00:00 2002'

``d.ctime()`` 等效于::

  time.ctime(time.mktime(d.timetuple()))

on platforms where the native C
:c`ctime` function (which `time.ctime` invokes, but which
`date.ctime` does not invoke) conforms to the C standard.
