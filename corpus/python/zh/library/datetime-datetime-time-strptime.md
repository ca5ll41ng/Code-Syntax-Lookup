---
id: "python-zh-function-datetime-time-strptime"
language: "python"
lang: "zh"
category: "function"
name: "time.strptime"
signature: "time.strptime(date_string, format)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.time.strptime"
license: "PSF"
updated: "2026-10-01"
---

# time.strptime

Return a `.time` corresponding to *date_string*, parsed according to
*format*.

如果 *format* 不包含微秒或时区信息，这将等价于::

  time(*(time.strptime(date_string, format)[3:6]))

`ValueError` is raised if the *date_string* and *format*
cannot be parsed by `time.strptime` or if it returns a value which is not a
time tuple.  See also `strftime-strptime-behavior` and
`time.fromisoformat`.

> *Added in 3.14*
