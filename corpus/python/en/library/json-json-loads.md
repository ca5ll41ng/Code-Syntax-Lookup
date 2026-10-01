---
id: "python-en-function-json-loads"
language: "python"
lang: "en"
category: "function"
name: "loads"
signature: "loads(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, array_hook=None, **kw)"
directive: "function"
module: "json"
source_url: "https://docs.python.org/3/library/json.html#json.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Identical to `load`, but instead of a file-like object,
deserialize *s* (a `str`, `bytes` or `bytearray`
instance containing a JSON document) to a Python object using this
`conversion table`.

> *Changed in 3.6*: *s* can now be of type :class:`bytes` or :class:`bytearray`. The input encoding should be UTF-8, UTF-16 or UTF-32.

> *Changed in 3.9*: The keyword argument *encoding* has been removed.
