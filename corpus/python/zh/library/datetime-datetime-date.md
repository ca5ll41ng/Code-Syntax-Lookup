---
id: "python-zh-function-datetime-date"
language: "python"
lang: "zh"
category: "function"
name: "date"
signature: "date(year, month, day)"
directive: "class"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.date"
license: "PSF"
updated: "2026-10-01"
---

# date

All arguments are required. Arguments must be integers, in the following
ranges:

* `MINYEAR <= year <= MAXYEAR`
* `1 <= month <= 12`
* `1 <= day <= number of days in the given month and year`

如果参数不在这些范围内，则抛出 :exc:`ValueError` 异常。
