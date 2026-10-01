---
id: "python-zh-function-re-x"
language: "python"
lang: "zh"
category: "function"
name: "X"
directive: "data"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.X"
license: "PSF"
updated: "2026-10-01"
---

# X

This flag allows you to write regular expressions that look nicer and are
more readable by allowing you to visually separate logical sections of the
pattern and add comments. Whitespace within the pattern is ignored, except
when in a character class, or when preceded by an unescaped backslash,
or within tokens like `*?`, `(?:` or `(?P<...>`. For example, `(? :`
and `* ?` are not allowed.
When a line contains a `#` that is not in a character class and is not
preceded by an unescaped backslash, all characters from the leftmost such
`#` through the end of the line are ignored.

This means that the two following regular expression objects that match a
decimal number are functionally equal::

   a = re.compile(r"""\d +  # the integral part
                      \.    # the decimal point
                      \d *  # some fractional digits""", re.X)
   b = re.compile(r"\d+\.\d*")

对应内联标记 ``(?x)``。
