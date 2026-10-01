---
id: "python-zh-function-enum-enumcheck"
language: "python"
lang: "zh"
category: "function"
name: "EnumCheck"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/zh-cn/3/library/enum.html#enum.EnumCheck"
license: "PSF"
updated: "2026-10-01"
---

# EnumCheck

*EnumCheck* contains the options used by the `verify` decorator to ensure
various constraints; failed constraints result in a `ValueError`.

attribute:: UNIQUE

attribute:: CONTINUOUS

attribute:: NAMED_FLAGS

> **Note**
>
> CONTINUOUS 和 NAMED_FLAGS 被设计用于配合整数值成员。
>

> *Added in 3.11*
