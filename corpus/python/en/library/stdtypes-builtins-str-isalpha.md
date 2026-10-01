---
id: "python-en-function-builtins-str-isalpha"
language: "python"
lang: "en"
category: "function"
name: "str.isalpha"
signature: "str.isalpha()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isalpha"
license: "PSF"
updated: "2026-10-01"
---

# str.isalpha

Return `True` if all characters in the string are alphabetic and there is at least
one character, `False` otherwise.  Alphabetic characters are those characters defined
in the Unicode character database as "Letter", i.e., those with general category
property being one of "Lm", "Lt", "Lu", "Ll", or "Lo".  Note that this is different
from the `Alphabetic property defined in section 4.10 'Letters, Alphabetic, and
Ideographic' of the Unicode Standard
<https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-4/#G91002>`__.
For example:

```python

>>> 'Letters and spaces'.isalpha()
False
>>> 'LettersOnly'.isalpha()
True
>>> 'µ'.isalpha()  # non-ASCII characters can be considered alphabetical too
True
```

See `unicode-properties`.
