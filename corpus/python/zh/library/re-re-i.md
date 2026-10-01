---
id: "python-zh-function-re-i"
language: "python"
lang: "zh"
category: "function"
name: "I"
directive: "data"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.I"
license: "PSF"
updated: "2026-10-01"
---

# I

Perform case-insensitive matching;
expressions like `[A-Z]` will also  match lowercase letters.
Full Unicode matching (such as `Ü` matching `ü`)
also works unless the :py`~re.ASCII` flag
is used to disable non-ASCII matches.
The current locale does not change the effect of this flag
unless the :py`~re.LOCALE` flag is also used.

对应于内联旗标 ``(?i)``。

Note that when the Unicode patterns `[a-z]` or `[A-Z]` are used in
combination with the `IGNORECASE` flag, they will match the 52 ASCII
letters and 4 additional non-ASCII letters: 'İ' (U+0130, Latin capital
letter I with dot above), 'ı' (U+0131, Latin small letter dotless i),
'ſ' (U+017F, Latin small letter long s) and 'K' (U+212A, Kelvin sign).
If the :py`~re.ASCII` flag is used, only letters 'a' to 'z'
and 'A' to 'Z' are matched.
