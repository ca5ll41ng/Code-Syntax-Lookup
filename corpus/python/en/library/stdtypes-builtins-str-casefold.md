---
id: "python-en-function-builtins-str-casefold"
language: "python"
lang: "en"
category: "function"
name: "str.casefold"
signature: "str.casefold()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.casefold"
license: "PSF"
updated: "2026-10-01"
---

# str.casefold

Return a casefolded copy of the string. Casefolded strings may be used for
caseless matching.

Casefolding is similar to lowercasing but more aggressive because it is
intended to remove all case distinctions in a string. For example, the German
lowercase letter `'ß'` is equivalent to `"ss"`. Since it is already
lowercase, `lower` would do nothing to `'ß'`; `casefold`
converts it to `"ss"`.
For example:

```python

>>> 'straße'.lower()
'straße'
>>> 'straße'.casefold()
'strasse'
```

The casefolding algorithm is `described in section 3.13.3 'Default Case
Folding' of the Unicode Standard
<https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-3/#G53253>`__.

> *Added in 3.3*
