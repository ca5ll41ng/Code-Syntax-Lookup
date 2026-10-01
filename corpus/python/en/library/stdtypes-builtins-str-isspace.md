---
id: "python-en-function-builtins-str-isspace"
language: "python"
lang: "en"
category: "function"
name: "str.isspace"
signature: "str.isspace()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isspace"
license: "PSF"
updated: "2026-10-01"
---

# str.isspace

Return `True` if there are only whitespace characters in the string and there is
at least one character, `False` otherwise.

For example:

```python

>>> ''.isspace()
False
>>> ' '.isspace()
True
>>> '\t\n'.isspace() # TAB and BREAK LINE
True
>>> '\u3000'.isspace() # IDEOGRAPHIC SPACE
True
```

A character is *whitespace* if in the Unicode character database
(see `unicodedata`), either its general category is `Zs`
("Separator, space"), or its bidirectional class is one of `WS`,
`B`, or `S`.

See also `isprintable`.
