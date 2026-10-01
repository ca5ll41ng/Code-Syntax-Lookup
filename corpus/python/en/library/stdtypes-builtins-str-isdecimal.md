---
id: "python-en-function-builtins-str-isdecimal"
language: "python"
lang: "en"
category: "function"
name: "str.isdecimal"
signature: "str.isdecimal()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isdecimal"
license: "PSF"
updated: "2026-10-01"
---

# str.isdecimal

Return `True` if all characters in the string are decimal
characters and there is at least one character, `False`
otherwise. Decimal characters are those that can be used to form
numbers in base 10, such as U+0660, ARABIC-INDIC DIGIT
ZERO.  Formally a decimal character is a character in the Unicode
General Category "Nd". For example:

```python

>>> '0123456789'.isdecimal()
True
>>> '٠١٢٣٤٥٦٧٨٩'.isdecimal()  # Arabic-Indic digits zero to nine
True
>>> 'alphabetic'.isdecimal()
False
```
