---
id: "python-en-function-builtins-str-isdigit"
language: "python"
lang: "en"
category: "function"
name: "str.isdigit"
signature: "str.isdigit()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isdigit"
license: "PSF"
updated: "2026-10-01"
---

# str.isdigit

Return `True` if all characters in the string are digits and there is at least one
character, `False` otherwise.  Digits include decimal characters and digits that need
special handling, such as the compatibility superscript digits.
This covers digits which cannot be used to form numbers in base 10,
like the [Kharosthi numbers](https://en.wikipedia.org/wiki/Kharosthi#Numerals).
Formally, a digit is a character that has the
property value Numeric_Type=Digit or Numeric_Type=Decimal.

For example:

```python

>>> '0123456789'.isdigit()
True
>>> '٠١٢٣٤٥٦٧٨٩'.isdigit()  # Arabic-Indic digits zero to nine
True
>>> '⅕'.isdigit()  # Vulgar fraction one fifth
False
>>> '²'.isdecimal(), '²'.isdigit(),  '²'.isnumeric()
(False, True, True)
```

See also `isdecimal` and `isnumeric`.
