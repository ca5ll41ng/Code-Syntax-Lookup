---
id: "python-zh-function-datetime-datetime-ctime"
language: "python"
lang: "zh"
category: "function"
name: "datetime.ctime"
signature: "datetime.ctime()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.ctime"
license: "PSF"
updated: "2026-10-01"
---

# datetime.ctime

返回一个表示日期和时间的字符串::

    >>> import datetime as dt
    >>> dt.datetime(2002, 12, 4, 20, 30, 40).ctime()
    'Wed Dec  4 20:30:40 2002'

The output string will *not* include time zone information, regardless
of whether the input is aware or naive.

``d.ctime()`` 等效于::

  time.ctime(time.mktime(d.timetuple()))

on platforms where the native C :c`ctime` function
(which `time.ctime` invokes, but which
`datetime.ctime` does not invoke) conforms to the C standard.
