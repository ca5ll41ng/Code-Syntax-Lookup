---
id: "python-en-function-builtins-str-strip"
language: "python"
lang: "en"
category: "function"
name: "str.strip"
signature: "str.strip(chars=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.strip"
license: "PSF"
updated: "2026-10-01"
---

# str.strip

Return a copy of the string with the leading and trailing characters removed.
The *chars* argument is a string specifying the set of characters to be removed.
If omitted or `None`, the *chars* argument defaults to removing whitespace,
that is characters for which `str.isspace` is true.  The *chars* argument
is not a prefix or suffix; rather, all combinations of its values are stripped.

For example:

```python

>>> '   spacious   '.strip()
'spacious'
>>> 'www.example.com'.strip('cmowz.')
'example'
```

The outermost leading and trailing *chars* argument values are stripped
from the string. Characters are removed from the leading end until
reaching a string character that is not contained in the set of
characters in *chars*. A similar action takes place on the trailing end.

For example:

```python

>>> comment_string = '#....... Section 3.2.1 Issue #32 .......'
>>> comment_string.strip('.#! ')
'Section 3.2.1 Issue #32'
```

See also `rstrip`.
