---
id: "python-zh-function-datetime-tzinfo-tzname"
language: "python"
lang: "zh"
category: "function"
name: "tzinfo.tzname"
signature: "tzinfo.tzname(dt)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.tzinfo.tzname"
license: "PSF"
updated: "2026-10-01"
---

# tzinfo.tzname

Return the time zone name corresponding to the `.datetime` object *dt*, as
a string. Nothing about string names is defined by the `datetime` module,
and there's no requirement that it mean anything in particular. For example,
`"GMT"`, `"UTC"`, `"-500"`, `"-5:00"`, `"EDT"`, `"US/Eastern"`, `"America/New York"` are all
valid replies. Return `None` if a string name isn't known. Note that this is
a method rather than a fixed string primarily because some `tzinfo`
subclasses will wish to return different names depending on the specific value
of *dt* passed, especially if the `tzinfo` class is accounting for
daylight time.

默认的 :meth:`tzname` 实现会引发 :exc:`NotImplementedError`。
