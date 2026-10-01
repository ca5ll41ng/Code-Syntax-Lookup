---
id: "python-en-function-builtins-str-istitle"
language: "python"
lang: "en"
category: "function"
name: "str.istitle"
signature: "str.istitle()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.istitle"
license: "PSF"
updated: "2026-10-01"
---

# str.istitle

Return `True` if the string is a titlecased string and there is at least one
character, for example uppercase characters may only follow uncased characters
and lowercase characters only cased ones.  Return `False` otherwise.

For example:

```python

>>> 'Spam, Spam, Spam'.istitle()
True
>>> 'spam, spam, spam'.istitle()
False
>>> 'SPAM, SPAM, SPAM'.istitle()
False
```

See also `title`.
