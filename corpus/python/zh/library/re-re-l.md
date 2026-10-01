---
id: "python-zh-function-re-l"
language: "python"
lang: "zh"
category: "function"
name: "L"
directive: "data"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.L"
license: "PSF"
updated: "2026-10-01"
---

# L

Make `\w`, `\W`, `\b`, `\B` and case-insensitive matching
dependent on the current locale.
This flag can be used only with bytes patterns.

对应于内联旗标 ``(?L)``。

> **Warning**
>
> This flag is discouraged; consider Unicode matching instead.
> The locale mechanism is very unreliable
> as it only handles one "culture" at a time
> and only works with 8-bit locales.
> Unicode matching is enabled by default for Unicode (str) patterns
> and it is able to handle different locales and languages.
>

> *Changed in 3.6*: :py:const:`~re.LOCALE` can be used only with bytes patterns and is not compatible with :py:const:`~re.ASCII`.

> *Changed in 3.7*: Compiled regular expression objects with the :py:const:`~re.LOCALE` flag no longer depend on the locale at compile time. Only the locale at matching time affects the result of matching.
