---
id: "python-en-function-builtins-str-maketrans"
language: "python"
lang: "en"
category: "function"
name: "str.maketrans"
signature: "str.maketrans(dict, /)"
directive: "staticmethod"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.maketrans"
license: "PSF"
updated: "2026-10-01"
---

# str.maketrans

This static method returns a translation table usable for `str.translate`.

If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters (strings of length 1) to Unicode ordinals,
strings (of arbitrary lengths) or `None`.  Character keys will then be
converted to ordinals.

If there are two arguments, they must be strings of equal length, and in the
resulting dictionary, each character in *from* will be mapped to the character at
the same position in *to*.  If there is a third argument, it must be a string,
whose characters will be mapped to `None` in the result.

> *Changed in 3.15*: *dict* can now be a :class:`frozendict`.
