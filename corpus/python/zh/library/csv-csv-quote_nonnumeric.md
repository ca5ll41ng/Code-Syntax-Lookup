---
id: "python-zh-function-csv-quote_nonnumeric"
language: "python"
lang: "zh"
category: "function"
name: "QUOTE_NONNUMERIC"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/zh-cn/3/library/csv.html#csv.QUOTE_NONNUMERIC"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_NONNUMERIC

指示 :class:`writer` 对象为所有非数字字段加上引号。

指示 :class:`reader` 对象将所有未加引号的字段转换为 :class:`float` 类型。

> **Note**
>
> Some numeric types, such as `bool`, `~fractions.Fraction`,
> or `~enum.IntEnum`, have a string representation that cannot be
> converted to `float`.
> They cannot be read in the `QUOTE_NONNUMERIC` and
> `QUOTE_STRINGS` modes.
>
