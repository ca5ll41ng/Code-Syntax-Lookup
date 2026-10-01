---
id: "python-zh-function-datetime-datetime-today"
language: "python"
lang: "zh"
category: "function"
name: "datetime.today"
signature: "datetime.today()"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.today"
license: "PSF"
updated: "2026-10-01"
---

# datetime.today

返回表示当前地方时的 date 和 time，其中 :attr:`.tzinfo` 为 ``None``。

等价于::

  datetime.fromtimestamp(time.time())

另请参阅 :meth:`now`, :meth:`fromtimestamp`。

This method is functionally equivalent to `now`, but without a
`tz` parameter.
