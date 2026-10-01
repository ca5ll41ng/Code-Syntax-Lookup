---
id: "python-en-function-builtins-str-isprintable"
language: "python"
lang: "en"
category: "function"
name: "str.isprintable"
signature: "str.isprintable()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isprintable"
license: "PSF"
updated: "2026-10-01"
---

# str.isprintable

Return `True` if all characters in the string are printable, `False` if it
contains at least one non-printable character.

Here "printable" means the character is suitable for `repr` to use in
its output; "non-printable" means that `repr` on built-in types will
hex-escape the character.  It has no bearing on the handling of strings
written to `sys.stdout` or `sys.stderr`.

The printable characters are those which in the Unicode character database
(see `unicodedata`) have a general category in group Letter, Mark,
Number, Punctuation, or Symbol (L, M, N, P, or S); plus the ASCII space 0x20.
Nonprintable characters are those in group Separator or Other (Z or C),
except the ASCII space.

For example:

```python

>>> ''.isprintable(), ' '.isprintable()
(True, True)
>>> '\t'.isprintable(), '\n'.isprintable()
(False, False)
```

See also `isspace`.
