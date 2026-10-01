---
id: "python-en-function-builtins-str-isnumeric"
language: "python"
lang: "en"
category: "function"
name: "str.isnumeric"
signature: "str.isnumeric()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isnumeric"
license: "PSF"
updated: "2026-10-01"
---

# str.isnumeric

Return `True` if all characters in the string are numeric
characters, and there is at least one character, `False`
otherwise. Numeric characters include digit characters, and all characters
that have the Unicode numeric value property, e.g. U+2155,
VULGAR FRACTION ONE FIFTH.  Formally, numeric characters are those with the property
value Numeric_Type=Digit, Numeric_Type=Decimal or Numeric_Type=Numeric.
For example:

```python

>>> '0123456789'.isnumeric()
True
>>> '٠١٢٣٤٥٦٧٨٩'.isnumeric()  # Arabic-Indic digits zero to nine
True
>>> '⅕'.isnumeric()  # Vulgar fraction one fifth
True
>>> '²'.isdecimal(), '²'.isdigit(),  '²'.isnumeric()
(False, True, True)
```

See also `isdecimal` and `isdigit`.
