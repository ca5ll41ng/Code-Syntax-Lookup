---
id: "python-zh-function-csv-quote_none"
language: "python"
lang: "zh"
category: "function"
name: "QUOTE_NONE"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/zh-cn/3/library/csv.html#csv.QUOTE_NONE"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_NONE

Instructs `writer` objects to never quote fields.
When the current *delimiter*, *quotechar*, *escapechar*, `'\r'`, `'\n'`
or any of the characters in *lineterminator* occurs in output data
it is preceded by the current *escapechar* character.
If *escapechar* is not set, the writer will raise `Error` if
any characters that require escaping are encountered.
Set *quotechar* to `None` to prevent its escaping.

指示 :class:`reader` 对象不对引号字符执行特殊处理。
