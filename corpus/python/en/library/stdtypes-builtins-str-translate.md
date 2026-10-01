---
id: "python-en-function-builtins-str-translate"
language: "python"
lang: "en"
category: "function"
name: "str.translate"
signature: "str.translate(table, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.translate"
license: "PSF"
updated: "2026-10-01"
---

# str.translate

Return a copy of the string in which each character has been mapped through
the given translation table.  The table must be an object that implements
indexing via `~object.__getitem__`, typically a `mapping` or
`sequence`.  When indexed by a Unicode ordinal (an integer), the
table object can do any of the following: return a Unicode ordinal or a
string, to map the character to one or more other characters; return
`None`, to delete the character from the return string; or raise a
`LookupError` exception, to map the character to itself.

You can use `str.maketrans` to create a translation map from
character-to-character mappings in different formats.

The following example uses a mapping to replace `'a'` with `'X'`,
`'b'` with `'Y'`, and delete `'c'`:

```python

>>> 'abc123'.translate({ord('a'): 'X', ord('b'): 'Y', ord('c'): None})
'XY123'
```

See also the `codecs` module for a more flexible approach to custom
character mappings.
